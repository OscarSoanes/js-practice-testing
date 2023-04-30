/**
 * Creates a caeser cipher using a message based on the steps provided.
 * @param {String} message the message to be encrypted
 * @param {Number} step the steps from the original letter
 * @return String a message shifted based on the step.
 */
export function caeserCipher(message, step) {
  let result = "";

  for (const letter of message) {
    result += moveLetter(letter, step);
  }

  return result;
}

/**
 * Moves a letter with the provided step
 * @param {String} letter the letter to be moved
 * @param {Number} step the number to be moved
 * @returns a singular letter that has been shifted
 */
function moveLetter(letter, step) {
  const dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const index = dict.indexOf(letter.toLowerCase());
  if (index === -1) {
    return letter;
  }

  const shiftedIndex = toShift(index, step);

  if (isLowerCase(letter)) {
    return dict.at(shiftedIndex);
  } else {
    return dict.at(shiftedIndex).toUpperCase();
  }
}

/**
 * Checks if a specific letter is lowercase
 * @param {String} letter the letter to be checked
 * @returns Boolean if value is lowercase
 */
function isLowerCase(letter) {
  return letter === letter.toLowerCase();
}

/**
 * Checks if a letter is within the alphabet, wraps around to 0 if goes past 26
 * @param {Number} index the original index location
 * @param {Number} step the step to increment
 * @returns Number based on the index and step
 */
function toShift(index, step) {
  return (index + step) % 26;
}
