/**
 * Calculates based on the operation with the given numbers
 * @param {String} operation the to calculate
 * @param {Number} x the first value
 * @param {Number} y the second value
 */
export function calculate(operation, x = 0, y = 0) {
  switch (operation) {
    case "add": {
      return x + y;
    }
    case "subtract": {
      return x - y;
    }
    case "divide": {
      if (x === 0 || y === 0) {
        throw new Error("NaN: Cannot divide by 0");
      }
      return x / y;
    }
    case "multiply": {
      return x * y;
    }
    default: {
      throw new Error("Syntax Error: Invalid operation");
    }
  }
}
