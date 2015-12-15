/**
 * Created by chie on 12/15/2015.
 * Remove all falsy values from an array.
 * Falsy values in javascript are false, null, 0, "", undefined, and NaN.
 *
 * http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer
 *
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(isFalse);
}

function isFalse(val) {
    return Boolean(val) !== false;
}


console.log(bouncer([7, "ate", "", false, 9]));
