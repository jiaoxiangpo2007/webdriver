/**
 * Created by Administrator on 2015-10-19.
 */

var fs = require('fs');
var dir = './';
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
            console.log(pathname);
        } else {
            callback(pathname);
            console.log(pathname);
        }
    });
}