var http = require('http');
var Mongo = require('mongodb').MongoClient;
var s1 = require('./select');
var s2 = require('./insert');
var s3 = require('./update');
var s4 = require('./delete');
var rst = "";
const url= 'mongodb://localhost:27017';
const dtb='Test'
const client= new Mongo(url);

async function process()
{
  let r = await client.connect();
  db = r.db(dtb);
  c = db.collection('players');
  f = {country: "England"}
  let d = await c.find(f).toArray();
  rst = s1.outputResult(d);
  console.log(d)
}
process();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("rst: " + rst);
  res.end(rst);
}).listen(8080);