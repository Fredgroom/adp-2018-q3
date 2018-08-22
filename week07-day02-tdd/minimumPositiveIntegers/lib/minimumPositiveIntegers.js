/**
 * @description Return first positive intiger that doresn't return in the array.
 * @returns {Number} the first positive integer that doesn't return in the array.
 */


function minimumPositiveInteger(numbers) {
    if (!Array.isArray(numbers)) {
        return;
    }
    if (numbers.length === 0) {
        return;
    }
    const sorted = numbers.slice(0).sort();
    const maxNumber = sorted[sorted.length - 1];
    let missing = undefined;
    for (var i = 1; i <= maxNumber; i++) {
        const found = numbers.find((item) => item === i);
        console.log(i, found);
        // const found2 = numbers.find(function(item) {
        //     return item === i;
        // })
    }

    return missing;
}


module.exports = minimumPositiveInteger;