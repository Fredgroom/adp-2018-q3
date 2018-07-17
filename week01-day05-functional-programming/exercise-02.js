//Array.prototype.forEach
    //   The forEach() method executes a provided function once for each array element.

    arr.forEach(function callback(currentValue[, index[, array]]) {
        //your iterator
    }[, thisArg]);


//Array.prototype.map
    //  The map() method creates a new array with the results of calling a provided function on every element in the calling array.

    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Return element for new_array
    }[, thisArg])

//Array.prototype.concat
    // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

//Array.prototype.push
    // The push() method adds one or more elements to the end of an array and returns the new length of the array.

    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Return element for new_array
    }[, thisArg])

//Array.prototype.slice
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

    arr.slice([begin[, end]])

//Array.prototype.splice
    // The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

    array.splice(start[, deleteCount[, item1[, item2[, ...]]]])