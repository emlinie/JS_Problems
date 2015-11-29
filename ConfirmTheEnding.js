/**
 * Created by Satori on 11/3/2015.
 */

/**
 * Check if a string (first argument) ends with the given target string (second argument).
 * http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
 *
 * **/

function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if (str.substr(-(target.length)) === target)
        return true;
    else
        return false;
}

console.log(end("Bastian", "n"));
