/**
 * Created by Satori on 11/3/2015.
 */

/**
 * Return an array consisting of the largest number from each provided sub-array. For simplicity,
 * the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
 * @param arr array of array size 4 for sub array and array
 * @returns {number[]} largest number from each sub array
 * http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
 */


function largestOfFour(arr) {
    // You can do this!

    var ans = [0, 0, 0, 0];

    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            if (arr[i][j] > ans[i])
                ans[i] = arr[i][j];
        }
    }


    return ans;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
