var http = require('http');
var Mongo = require('mongodb').MongoClient;
var utils = require('./utils');
var rst = "";
const url= 'mongodb://localhost:27017';
const dtb='Test'
const client= new Mongo(url);

async function process()
{
  let r = await client.connect();
  db = r.db(dtb);
  c = db.collection('players');
  //Select Data from Collection with condition f
  f = {country: "England"}
  let d = await c.find(f).toArray();

  //Insert Data
  //const result = await c.insertOne(utils.qry_insert());

  //Update Data
  fltr, updt, optns = {} //Option to create document if no document
  const result = await movies.updateOne(fltr, updt, optns);


  rst = utils.outputResult(d);
  console.log(d)
}
process();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("rst: " + rst);
  res.end(rst);
}).listen(8080);