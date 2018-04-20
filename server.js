let ttn = require('ttn'),
    express = require('express'),
    config = require(__dirname + "/config.json")

// get these from your TTN console https://console.thethingsnetwork.org/
var appId = 'ben';
var accessKey = config.key;

var jsonObj;

ttn.data(appId, accessKey)
    .then(function(client) {
        client.on("uplink", function (devID, payload) {
            jsonObj = payload;
            console.dir(payload)
        })
    })
    .catch(function(err) {
        console.error(err);
    })

let app = express()

app.use("/", express.static(process.cwd()));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get("/", function(req,res) {
  res.sendFile(process.cwd() + "/index.html");
});


app.get("/api", function(req, res) {
   appId = req.query.appId;
   accessKey = req.query.accessKey;

   ttn.data(appId, accessKey)
    .then(function(client) {
        client.on("uplink", function (devID, payload) {
            jsonObj = payload;
            console.dir("Inside with " + payload)
        })
    })
    .catch(function(err) {
        console.error(err);
    });
    res.send(jsonObj);
   //console.log("AppId is " + appId);
   //res.send(jsonObj);
});


app.listen(8080, function () {
  console.log('listening on port 8080!')
})
