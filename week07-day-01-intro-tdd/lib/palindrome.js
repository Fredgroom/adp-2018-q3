/**
 * @description Check if any word is a palindrome
 * @returns {Boolean} the specified element of the Fibonacci sequence.
 */

function palindrome(input) {
    if (input.length === 1) {
        return true;
    }

    if (typeof input !== "string") {
        return false;
    }

    const lowerCase = input.toLowerCase();
    const sanitised = lowerCase.replace(/ /g, '');
    const reversed = sanitised.split('').reverse().join('');
    if (reversed === sanitised) {
        return true;
    } else {
        return false;
    }

    inputs.forEach(input => {
        console.log(input);
      });
};

module.exports = palindrome;