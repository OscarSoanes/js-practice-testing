/**
 * Creates a nicely formatted structure for an Array to see data
 * @param {Array} arr the array to analyze
 * @returns a nicely formatted object containing the average, min, max and length
 */
export function analyzeArray(arr) {
  const obj = {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };

  return obj;
}

/**
 * Gets the average from an array of integers
 * @param {Array} arr the array to get average of
 * @returns the average based on an array
 */
function getAverage(arr) {
  const total = arr.reduce((total, curr) => (total += curr));
  const length = arr.length;

  return total / length;
}

/**
 * Gets the smallest value of the Array
 * @param {Array} arr an array of integers
 * @returns the smallest value within the Array
 */
function getMin(arr) {
  return Math.min(...arr);
}

/**
 * Gets the largest value of the Array
 * @param {Array} arr an array of integers
 * @returns the largest value within the Array
 */
function getMax(arr) {
  return Math.max(...arr);
}
