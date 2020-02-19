const express = require('express')
var app = express();
const port = 9006;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//db connection check
const db = require('./config/authenticate')
db.authenticate()


// sync all the database schema
const users = require("./models/users")
users.sync({force: false}).then(() => {
 console.log("database is in sync");
});

var routes = require("./routes/index")
app.use(routes)


app.listen(port, console.log("server started @" ,port)
) 