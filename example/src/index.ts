export * as foo from "./foo";

/**
 * A sample class to demonstrate the Fresh theme.
 * This is just an example for testing the theme during development.
 */
export class Calculator {
  private result: number = 0;

  /**
   * Adds two numbers together.
   * @param a - The first number
   * @param b - The second number
   * @returns The sum of a and b
   */
  add(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }

  /**
   * Subtracts the second number from the first.
   * @param a - The number to subtract from
   * @param b - The number to subtract
   * @returns The difference of a and b
   */
  subtract(a: number, b: number): number {
    this.result = a - b;
    return this.result;
  }

  /**
   * Gets the current result stored in the calculator.
   * @returns The current result
   */
  getResult(): number {
    return this.result;
  }
}

/**
 * A utility function that formats a number as currency.
 * @param amount - The amount to format
 * @param currency - The currency code (default: "USD")
 * @returns A formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Configuration options for the application.
 */
export interface AppConfig {
  /** The application name */
  name: string;
  /** The version number */
  version: string;
  /** Whether debug mode is enabled */
  debug?: boolean;
}
