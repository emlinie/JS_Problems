/**
 * Created by Satori on 12/18/2015.
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it
 * has been sorted.
 * For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19
 * is less than 20 (index 2) and greater than 5 (index 1).
 *
 * http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong
 *
 */


function where(arr, num) {

    arr.sort(function (a, b) {
        return a - b;
    });

    var count = 0;

    for (var i = 0; i < arr.length; ++i) {
        if(arr[i] < num)
            count++;
        else
            return count;
    }
    return count;
}


//console.log(where([40, 60], 50));
//console.log(where([10, 20, 30, 40, 50], 35));
//console.log(where([10, 20, 30, 40, 50], 30));
console.log(where([5, 3, 20, 3], 5));