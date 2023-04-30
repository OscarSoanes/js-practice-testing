/**
 * Reverses a string
 * @param {String} message to be reversed
 */
export function reverseString(message) {
  let result = "";
  for (let i = message.length; i >= 0; i--) {
    result += message.charAt(i);
  }
  return result;
}
