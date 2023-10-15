const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const http = require('http').Server(app)
const url = "mongodb://localhost:27017";
const io = require('socket.io')(http);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
});
const docArray = [
    { type: "user", name: "super", password: "123", role: "super admin", groups: ["uno", "dos"] },
    { type: "user", name: "jim", password: "password123", role: "group admin", groups: ["uno"] },
    { type: "user", name: "harry", password: "@ss1gment815", role: "group admin", groups: ["uno"] },
    { type: "user", name: "terry", password: "nobody42", role: "user", groups: ["uno"] },
    { type: "user", name: "bob", password: "bubbagoes#2", role: "user", groups: ["dos"] },
    { type: "user", name: "dylan", password: "megam4n", role: "user", groups: ["dos"] },
    { type: "user", name: "simon", password: "yeah12345", role: "user", groups: ["dos"] },
    { type: "group", name: "uno", members: ["jim", "harry", "terry"] },
    { type: "group", name: "dos", members: ["bob", "dylan", "simon"] },
    { type: "chat", name: "uno hangout", group: "uno", messages: ["hey guys what's up?", "nothing", "bored, you", "sweet", "yeah"] },
    { type: "chat", name: "ckk", group: "uno", messages: ["so I was talking to Linda about this", "yeah?", "and she said this", "woah", "yeah, that's why you don't catch me what?"] },
    { type: "chat", name: "dos hangout", group: "dos", messages: ["hey guys what's good?", "nothing much", "bored", "smooth", "no"] },
    { type: "chat", name: "meeting room", group: "dos", messages: ["something really important is happening here", "yep", "file those papers by yesterday", "yep", "WHERE ARE THEY LINDA?"] }];
const documents = {};
const client = new MongoClient(url);
const db = client.db("dbName");
const myCol = db.collection("products");
const main = async function(client, myCol) {
    await client.connect();
    await myCol.drop();
    await myCol.insertMany(docArray);
    result = await myCol.find({}).toArray();
    // other operations like on myCol may be put here
    console.log(result);
    // you will find docArray has been inserted to myCol
    client.close();
};
module.exports = {
    safeJoin: function safeJoin(currentId) { return currentId; },
    getDoc: function getDoc(docId) { return docId; },
    addDoc: function addDoc(doc) { return doc; },
    editDoc: function editDoc(doc) { return doc; },
};
io.on("connection", socket => {
  let previousId;

  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
    previousId = currentId;
  };
socket.on("getDoc", docId => {
    safeJoin(docId);
    socket.emit("document", documents[docId]);
});
socket.on("addDoc", doc => {
    documents[doc.id] = doc;
    safeJoin(doc.id);
    io.emit("documents", Object.keys(documents));
    socket.emit("document", doc);
    return doc;
  });
socket.on("editDoc", doc => {
    documents[doc.id] = doc;
    socket.to(doc.id).emit("document", doc);
    return doc;
  });
    io.emit("documents", Object.keys(documents));
    //console.log(`Socket ${socket.id} has connected`);
});
main(client, myCol);
app.use(express.static(__dirname + '3813ICT_assignment\dist\3813-ict-assignment'));
let server = http.listen(3000, function () {});