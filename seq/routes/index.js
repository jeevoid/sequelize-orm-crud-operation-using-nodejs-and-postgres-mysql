const express = require("express")
const router = express.Router()
const pg = require("pg")
const users = require("../models/users")


//fetch all users
router.get("/",(req,res)=> {
    users.findAll({}).then((data) => {
        console.log(data);
        res.send(data)
     }).catch((err) => {
        console.log(err);
     });

})

//add user
router.post('/add', (req,res)=> {
    var data = req.body;
    console.log("data",data)
    return users.create({       
        username:data.username,
        password:data.password
    }).then(function (users) {
        if (users) {
            res.send(users);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
});


//update user
router.patch('/update/:id', (req,res)=> {
    var data = req.body;
    console.log("data",data)
    var values = {username: data.username , password : data.password };
    var condition = { where :{id: req.params.id} };
    var options = { multi: true };
    users.update(values, condition , options)
    . then(function(users) {
        if (users) {
            res.send(users);
        } else {
            res.status(400).send('Error in insert new record');
        }
    } )
    });
        




module.exports = router;


// return users.update(
//     { username: data.username },
//     { password: data.password },
//     { where: {id: "1" } 
//   })
//   .then(function (users) {
//       if (users) {
//           res.send(users);
//       } else {
//           res.status(400).send('Error in insert new record');
//       }
// });