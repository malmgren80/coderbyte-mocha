var print = require("./print.js");

exports.returnString = function(value) {
    print(value);

    return value;
};