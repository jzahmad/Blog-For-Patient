/**
 * Suleman Malik (A00441091)
 * Jazib Ahmad (A00452355)
 * 
 * This is server file with the MongoDB which saves the state of publish buttons, the texts and the word bank
 */
const express = require("express"); // start express application
const mongodb = require("mongodb").MongoClient;
const server = express(); // define top level function
//const port = 3044; // the port
const blog = ["", "", "", "", false, false, false] // To store data

//Credential string
let head = "mongodb://";
let user = "s_malik";
let password = "nearlyFLOWERwinter58";
let localHost = "127.0.0.1";
let localPort = "27017";
let database = "s_malik";
let connectionString = head + user + ":" + password + "@" + localHost + ":" + localPort + "/" + user;

server.use(express.json()); // implement JSON recognition
server.use(express.urlencoded({ extended: true })); // implement incoming name:value pairs to be any type

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow any origin
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // allow any method
    res.header("Access-Control-Allow-Headers", "Content-Type"); // accept only headers with this type
    next(); // middleware callback function required for processing
};
server.use(allowCrossDomain); // implement allowable domain characteristics

let globalDB;           //Databse variable
let extPort = 3022;     // the port

/**
 * Stores the data in the Databse for blog 1 in the collection Blogs
 */
 server.post("/box1", function (req, res) {

    let query = { num: 2 };
    let value = { $set: { "text.0": req.body.text1 } };

    globalDB.collection("Blogs").updateOne(query, value, insertCB);

    console.log("box1:" + req.body.text1);
    blog[0] = req.body.text1;
    return res.status(200).send(blog[0]);
});
/**
 * Stores the data in the Databse for blog 2 in the collection Blogs
 */
server.post("/box2", function (req, res) {

    let query = { num: 2 };
    let value = { $set: { "text.1": req.body.text2 } };

    globalDB.collection("Blogs").updateOne(query, value, insertCB);

    console.log("box2:" + req.body.text2);
    blog[1] = req.body.text2;
    return res.status(200).send(blog[1]);
});
/**
 * Stores the data in the Databse for blog 3 in the collection Blogs
 */
server.post("/box3", function (req, res) {

    let query = { num: 2 };
    let value = { $set: { "text.2": req.body.text3 } };

    globalDB.collection("Blogs").updateOne(query, value, insertCB);

    console.log("box3:" + req.body.text3);
    blog[2] = req.body.text3;
    return res.status(200).send(blog[2]);
});
/**
 * Stores the data in the Databse for word bank in the collection Blogs
 */
server.post("/bank", function (req, res) {

    let query = { num: 3 };
    let value = { $set: { "wordbank": req.body.text4 } };

    globalDB.collection("Blogs").updateOne(query, value, insertCB);

    console.log("bank:" + req.body.text4);
    blog[3] = req.body.text4;
    return res.status(200).send(blog[3]);
});
/**
 * Stores the state of publish button in the database
 */
 server.post("/pub1", function (req, res) {

    /**let publish = req.body.publish;
    let publishtoggle = (publish == "true");

    let publishObj = { publishVar: publishtoggle };
    let query = { num: 1 };
    let value = { $set: publishObj };*/

    let query = { num: 1 };
    let value = { $set: { "publish.0": req.body.publish1 === "true" } };

    globalDB.collection('Blogs').updateOne(query, value, (err) => {
        if (err != null) { throw err }
        res.status(200).send();
    })

    console.log("pub1:" + req.body.publish1);
    blog[4] = req.body.publish1;
    return res.status(200).send(blog[4]);
});
/**
 * Stores the state of publish button in the database
 */
server.post("/pub2", function (req, res) {

    let query = { num: 1 };
    let value = { $set: { "publish.1": req.body.publish2 === "true" } };

    globalDB.collection('Blogs').updateOne(query, value, (err) => {
        if (err != null) { throw err }
        res.status(200).send();
    })

    console.log("pub2:" + req.body.publish2);
    blog[5] = req.body.publish2;
    return res.status(200).send(blog[5]);
});
/**
 * Stores the state of publish button in the database
 */
server.post("/pub3", function (req, res) {

    let query = { num: 1 };
    let value = { $set: { "publish.2": req.body.publish3 === "true" } };

    globalDB.collection('Blogs').updateOne(query, value, (err) => {
        if (err != null) { throw err }
        res.status(200).send();
    })

    console.log("pub3:" + req.body.publish3);
    blog[6] = req.body.publish3;
    return res.status(200).send(blog[6]);
});
/**
 * This will send file from server.
 */

// it is general getter
server.get("/myGetter", function (req, res) {
    console.log(req.url);
    return res.status(200).send(blog);
});
/**
 * This gets/finds the blog 1
 */
server.get("/Blog1", function (req, res) {

   /* globalDB.collection("Blogs").findOne({ num: 2 }, function (err, result) {
        if (err) {
            throw err;
        }    
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * This gets/finds the publish 1
 */
server.get("/pub1", function (req, res) {

    /*globalDB.collection("Blogs").findOne({ num: 1 }, function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * This gets/finds the blog 2
 */
server.get("/Blog2", function (req, res) {

    /*globalDB.collection("Blogs").findOne({ num: 2 }, function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * This gets/finds the publish 1
 */
server.get("/pub2", function (req, res) {

    /*globalDB.collection("Blogs").findOne({ num: 1 }, function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * This gets/finds the blog 2
 */
server.get("/blog3", function (req, res) {


    /*globalDB.collection("Blogs").findOne({ num: 2 }, function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * This gets/finds the publish 1
 */
server.get("/pub3", function (req, res) {

    /*globalDB.collection("Blogs").findOne({ num: 1 }, function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });*/

    console.log(req.url);
     return res.status(200).send(blog);
});
/**
 * Shows the port of server.
 
server.listen(port, function () {
    console.log("Listening on port 3044");
});*/

function insertCB(err, mods, status) {
    if (err != null) throw err;
}
/**
 * Shows the port of server.
 
server.listen(port, function () {
    console.log("Listening on port 3044");
});
*/

// Create the connection to a mongoDB database instance
//
// Parameter 1: see connectionString above
// Parameter 2: Anonymous callback function that either:
//                (1) throws an error, or
//                (2) continues regular processing
mongodb.connect(connectionString, function (error, client) {
    if (error) {
        throw error;
    }

    // This version of mongodb returns a client object
    // which contains the database object
    globalDB = client.db("s_malik");

    // "process" is an already available global variable with information
    // about this particular Node.js application.
    //
    // If the SIGTERM event occurs, use the anonymous function to
    // close the database and server in a controlled way. 
    process.on("SIGTERM", function () {
        console.log("Shutting server down.");
        client.close();
        server.close();
    });

    // Start server listening on port 3022
    var serverside = server.listen(extPort, function () {
        console.log("Listening on port %d", serverside.address().port);
    });
});