/**
 * Created by Satori on 11/30/2015.
 */
/***
 * Return the remaining elements of an array after chopping off n elements from the head.
 * The head meaning the beginning of the array, or the zeroth index
 *
 * http://www.freecodecamp.com/challenges/bonfire-slasher-flick
 *
 * @param howMany
 * @returns {*}
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 4));