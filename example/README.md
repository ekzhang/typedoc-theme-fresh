> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## What is this?

This is an example package for testing the [typedoc-theme-fresh](../) theme. It contains exactly what you'd expect from a demo package:

- A `Calculator` class that can add and subtract (multiplication and division were deemed too ambitious)
- A `formatCurrency` function for when you need to make your numbers look fancy
- The meaning of life, conveniently exported as `foo.value` (spoiler: it's 42)
- Critically important bean metadata

## Installation

You don't install this. This is an example. It lives here, in this repo, serving its noble purpose of generating documentation.

## Usage

```typescript
import { Calculator, formatCurrency, foo } from "example";

// Perform advanced mathematics
const calc = new Calculator();
const sum = calc.add(2, 2); // 4, allegedly

// Make money look professional
const price = formatCurrency(99.99); // "$99.99"

// Access the meaning of life
console.log(foo.value); // 42

// Learn about beans
console.log(foo.beans.taste); // "delicious"
```

## Features

- **Stateful arithmetic**: Because who doesn't want their calculator to remember things?
- **Internationalized currency**: Well, just USD by default, but the _potential_ is there
- **Bean documentation**: Finally, someone asked the hard questions about bean color
- **TypeScript**: Fully typed, because `number + number` returning `number` needs that extra safety

## Documentation

The generated documentation is the whole point of this package's existence. Run the theme build to see it in action.

## License

This code is so simple it probably can't be copyrighted, but it inherits whatever license the parent project has.

## Contributing

This is an example package. If you're thinking about contributing to it, maybe consider contributing to the actual theme instead? Just a thought.
