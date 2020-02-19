 var db = require("./database")

// test db connection
db.authenticate()
  .then(()=> console.log("database connected"))
  .catch(err => console.log("error",err))

  module.exports = db