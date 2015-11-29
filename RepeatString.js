/**
 * Created by Satori on 11/4/2015.
 * Repeat a given string (first argument) n times
 * (second argument). Return an empty string if n is a negative number.
 * http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string
 **/

function repeat(str, num) {
    var result = "";
    for (var i = 0; i < num; ++i) {
        result += str;
    }

    // repeat after me
    return result;
}

console.log(repeat("abc", 3));