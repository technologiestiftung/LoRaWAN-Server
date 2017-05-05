var ttn = require('ttn');
var express = require('express');
var app = express()


/*** // get these from your TTN console https://console.thethingsnetwork.org/
var region = '';
var appId = '';
var accessKey = '';
*/

var jsonObj;


var client = new ttn.Client(region, appId, accessKey);


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get("/api", function(req, res) {
    res.send(jsonObj);
});


client.on('connect', function(connack) {
    console.log('[DEBUG]', 'Connect:', connack);
});

client.on('error', function(err) {
    console.error('[ERROR]', err.message);
});

client.on('activation', function(deviceId, data) {
    console.log('[INFO] ', 'Activation:', deviceId, data);
});

client.on('message', function(deviceId, data) {
    jsonObj = data;

    console.log(jsonObj);
});

app.listen(8080, function () {
  console.log('listening on port 8080!')
})
