// This is module B
var A;
// Uncomment the line below to break circular dependecies.
// A = require("./moduleA");

var B = module.exports = function(val){
  console.log(A.patateType(val));
};

// Comment the line below to break circular dependecies.
A = require("./moduleA");
