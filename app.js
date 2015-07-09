require("babel-core/register");

var es6 = require("./es6/index");
var es5 = require("./es5/index");

console.log("### ES6 ###");
es6();

console.log("### ES5 ###");
es5();
