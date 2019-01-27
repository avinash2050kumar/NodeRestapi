/* const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(
  url,
  (err, db) => {
    if (err) {
      return console.log("Unable to connect");
    }
    console.log("Connected");

    db.collection("To").insertOne({ name: "Fuck Off" }, (err, result) => {
      console.log("Result", result);
    });
  }
);

console.log(
  "objectId is 12bytes value , " +
    "first 4 bytes is timestamp , " +
    "then next 3 digit is machine identifier , " +
    "next 2 is process id and last 3 is no digits"
);*/

const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'media';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('documents');
    // Find some documents
    
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs)
    });
    client.close();
});
