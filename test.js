const assert = require("assert");
const backup = console.log;

const result = {};
console.log = function () {
    result.text = arguments[0];
};

// inject filename+linenumber
require('./index')(__dirname);

function test() {
    console.log('here');
}

const cout = 100000;

let start = Date.now();

for (let i = 0; i < cout; ++i) {
    test();
}

let end = Date.now();
backup("elapse: " + (end - start));

assert.equal("test.js:13:13 here", result.text);