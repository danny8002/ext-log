
const path = require('path');

module.exports = function extend(dir) {

    var getCaller = function () {
        let obj = {};
        Error.captureStackTrace(obj, getCaller);

        //    at xxx (D:\temp\xxxx\app.js:4:13)  in windows
        // or at xxx (../app.js:4:13)            in linux
        let line = obj.stack.split('\n')[2];
        let start = 0;
        let end = 0;
        for (let i = 0; i < line.length; ++i) {
            if (line[i] == '(') {
                start = i;
                i = i + 4;
            }
            if (line[i] == ')') {
                end = i;
            }
        }

        let target = line.substring(start + 1, end);
        return path.relative(dir, target) + " ";
    };

    const log = console.log;

    console.log = function () {
        let pos = getCaller();
        let d = arguments;
        if (d.length > 0) d[0] = pos + d[0];
        log.apply(console, d);
    }
}
