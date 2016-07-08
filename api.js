/**
 * Created by Administrator on 2015-10-20.
 */
var qs = require("querystring");
var http = require("http");

var options = {
    "method": "POST",
    "hostname": "www.sunagy.com",
    "port": "7000",
    "path": "/IM/GetUserFriendUsers",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "57e157f3-5497-bb14-f1dd-8e6d43605a6f",
        "content-type": "application/x-www-form-urlencoded"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.write(qs.stringify({ UserID: '7464' }));
req.end();