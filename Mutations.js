/**
 * Created by Satori on 11/30/2015.
 * Return true if the string in the first element of the array contains all of the letters of the string in
 * the second element of the array.
 *
 * http://www.freecodecamp.com/challenges/bonfire-mutations#?
 *
 */
function mutation(arr) {

    var base = arr[0].toLowerCase().split('');
    var match = arr[1].toLowerCase().split('');

    for (var i = 0 ; i < match.length; i++) {
        if (base.indexOf(match[i]) == -1 ) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["floor", "for"]));