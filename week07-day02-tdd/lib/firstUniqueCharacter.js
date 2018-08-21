/**
 * @description Return first unique character
 * @returns {String} the first uniuqe character.
 */

function firstUniqueCharacter(input) {

    if (typeof input !== "string") {
        return undefined;
    }

    if (input.length === 1) {
        return input;
    };

    if (input.length === 2) {
        if (input[0] !== input[1]) {
            return input[0];
        } else {
            return undefined;
        }
    };
    const characterCounts = {};
    for (let i = 0; i < input.length; i++) {
        const currentCharacter = input[i];

        if (characterCounts[currentCharacter]) {
            characterCounts[currentCharacter]++;
        } else {
            characterCounts[currentCharacter] = 1;
        }
    }
    // console.log('input:', input, 'characterCounts:', characterCounts, Object.keys(characterCounts) )
    // const result = Oject.keys(charCounts).find((key) => {
    //     return charCounts[key] === 1;
    // });
    // console.log('***results:', result);

    return Object.keys(characterCounts).find((key) => {
        return characterCounts[key] === 1;
    });
}


module.exports = firstUniqueCharacter;