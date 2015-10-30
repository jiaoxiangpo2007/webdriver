/**
 * Created by Administrator on 2015-10-19.
 */
var childProcess = require('child_process');
var child = childProcess.spawn('node', ['api.js'], {
    stdio: [0, 1, 2, 'ipc']
});

child.on('message', function (msg) {
    console.log(msg);
});


child.send({hello: 'hello'});

