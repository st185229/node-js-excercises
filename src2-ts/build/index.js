"use strict";
var myName = "your name";
var hello = function (userName) { return "hello, " + userName; };
console.log(hello);
var arr; // only accepts strings
var arr2; // accepts strings or numbers
var arr3; // ['cat', 7, 'dog']
arr3 = ['cat', 7, 'dog'];
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 0] = "Friday";
    Weekend[Weekend["Saturday"] = 1] = "Saturday";
    Weekend[Weekend["Sunday"] = 2] = "Sunday";
})(Weekend || (Weekend = {}));
;
var tod = Weekend.Sunday;

