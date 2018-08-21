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
            return input [0];
        } else {
            return undefined;
        }
    };


    for (let i = 0; i < input.length; i++) {
        const currentCharacter = input[i];
        let isCurrentCharacterUnique = true;

        for (let j = 0; j < input.length; j++) {
            const checkingCharacter = input[j];

            if (i !== j) {
                if (currentCharacter === checkingCharacter) {
                    isCurrentCharacterUnique = false;
                }
            }
        }
        if (isCurrentCharacterUnique) {
            return currentCharacter;
        }
    }
}


module.exports = firstUniqueCharacter;