// This is module A
var B;
// Uncomment the line below to break circular dependecies.
//B = require("./moduleB");

var bInstance;

var A = module.exports = {
    init: function(val) {
      bInstance = new B(val);
    },

    patateType: function(val) {
      return val + " douce"
    }
};

// Comment the line below to break circular dependecies.
B = require("./moduleB");
