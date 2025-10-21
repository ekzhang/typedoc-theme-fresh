// Development server for Fresh theme.
// Watches for changes in the source files and rebuilds the theme and example docs.

import { spawn } from "node:child_process";
import chokidar from "chokidar";
import handler from "serve-handler";
import http from "node:http";

console.log("🔧 Starting Fresh theme development server...\n");

const port = process.env.PORT || 8888;

let isBuilding = false;
let shouldRebuild = false;
let httpServer = null;

/**
 * Run a command and return a promise that resolves when it completes.
 */
function runCommand(command, args, description) {
  return new Promise((resolve, reject) => {
    console.log(`▶️  ${description}...`);
    const proc = spawn(command, args, {
      stdio: "inherit",
      shell: true,
    });

    proc.on("close", (code) => {
      if (code === 0) {
        console.log(`✅ ${description} completed\n`);
        resolve();
      } else {
        console.error(`❌ ${description} failed with code ${code}\n`);
        reject(new Error(`${description} failed`));
      }
    });
  });
}

/**
 * Build the theme and regenerate docs.
 */
async function build() {
  if (isBuilding) {
    shouldRebuild = true;
    return;
  }

  isBuilding = true;
  shouldRebuild = false;

  try {
    await runCommand("npm", ["run", "build"], "Building theme");
    await runCommand("npm", ["run", "example"], "Generating example docs");
    console.log(
      `✨ Build complete! View at http://localhost:${port}/index.html\n`
    );
  } catch (error) {
    console.error("Build failed:", error.message);
  } finally {
    isBuilding = false;
    if (shouldRebuild) {
      console.log("🔄 Changes detected during build, rebuilding...\n");
      build();
    }
  }
}

// Start HTTP server to serve the docs
httpServer = http.createServer((request, response) => {
  return handler(request, response, {
    public: "docs-example",
    cleanUrls: false,
  });
});

httpServer.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}\n`);
});

// Initial build
console.log("🏗️  Running initial build...\n");
build();

// Watch for changes in the source directory
const watcher = chokidar.watch("src", {
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 100,
    pollInterval: 50,
  },
});

watcher.on("ready", () => {
  console.log("👀 Watching for changes in src/...\n");
});

watcher.on("change", (filePath) => {
  console.log(`📝 File changed: ${filePath}`);
  build();
});

watcher.on("add", (filePath) => {
  console.log(`➕ File added: ${filePath}`);
  build();
});

watcher.on("unlink", (filePath) => {
  console.log(`➖ File removed: ${filePath}`);
  build();
});

watcher.on("error", (error) => {
  console.error(`❌ Watcher error: ${error}`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n\n👋 Shutting down development server...");
  watcher.close();
  if (httpServer) {
    httpServer.close();
  }
  process.exit(0);
});
