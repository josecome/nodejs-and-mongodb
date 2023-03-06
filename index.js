var http = require('http');
var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var rst = "";

Mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Test");
  var query = { country: "England" };
  dbo.collection("players").find(query).toArray(function(err, result) {
    if (err) throw err;
    rst = result;
    console.log(result);
    db.close();
  });
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(rst);
}).listen(8080);