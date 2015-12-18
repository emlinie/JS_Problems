/**
 * Created by @emlinie on 12/15/2015.
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more
 * arguments. Remove all elements from the initial array that are of the same value as these arguments.
 *
 * http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy
 */

function destroyer(arr) {
    // Remove all the values

    var args = Array.prototype.slice.call(arguments);
    var arr = args[0];
    args.splice(0, 1);

    return arr.filter(function (e) {
        return args.indexOf(e) === -1;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));