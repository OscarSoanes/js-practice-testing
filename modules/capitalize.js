/**
 * Capitalises the first letter in a message
 * @param {String} message text to be capitalized
 */
export function capitalize(message) {
  return message.charAt(0).toUpperCase() + message.substring(1).toLowerCase();
}
