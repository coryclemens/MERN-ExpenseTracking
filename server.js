// AUTHOR : CORY CLEMENS
// DATE : 06/03/2020
// DESCRIPTION : This is the main entry point of our backend. This file 
//               handles the init. of the express framework, as well
//               as making a connection to the mongoDB database. After this,
//               the server listens on the designated PORT of the machine launched on.
//                                                                    (DEFAULT = 5000)
//                ****** See the /routes directory for all valid HTTP requests ******


const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');

dotenv.config({ path: './config/config.env' })

// Setup REST framework
const app = express();

// Establish port for server to listen (socket)
const PORT = process.env.PORT || 5000;

// Use bodyparser to handle URL encoded string in POST/GET
app.use(bodyParser.urlencoded({ extended: true }))

// Use CORS (CROSS ORIGIN RESOURCE SHARING) allows restricted resources 
// on a web page to be requested from another domain outside the domain 
// from which the first resource was served
app.use(cors());

//Use JSON
app.use(express.json());

// Connect to the MongoDB cluster and serve on PORT
MongoClient.connect(process.env.URI, function (err, client) {

    // If error, log
    if (err) return console.log(err)

    // Get DB from client
    var db = client.db('grailed');

    // Require API routes, pass in app and mongoDataBase 
    require('./routes')(app, db);

    app.listen(PORT, process.env.IP);
    console.log(`Live at ${PORT}, running in ${process.env.NODE_ENV}`.rainbow.underline.bold);
})