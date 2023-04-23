var str = value;
var strLength = value.length;

var cb = effect("upperToLower")("Checkbox");
var pct = effect("Range Control (%)")("Slider");
var myCharRange = linear(pct % 100, 0, 100, 0, strLength) + Math.floor(pct / 100) * strLength;
// var myCharRange = Math.ceil(effect("Range Control")("Slider")); // using character index

// main
for (i = 0; i < myCharRange; i++) {
    var curChar = str.charAt(i % strLength); // get current character
    var curMod = Math.ceil((i + 1) / strLength) - 1; // counter value for upper/lower case

    // odd - lowercase, even - uppercase
    if (curMod % 2 == 0) newChar = cb == 0 ? curChar.toUpperCase() : curChar.toLowerCase();
    else newChar = cb == 0 ? curChar.toLowerCase() : curChar.toUpperCase();

    // replace character
    str = str.replace(curChar, newChar);
};
str