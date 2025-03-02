// Mongoose is used to write down the datas in the MongoDB in layman terms.
const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json()) // in built middleware


mongoose.connect("Mongo Url")


// mongoose expect us to first describe the somehow the schema will look alike
const User = mongoose.model('Users', {name:String, email:String, password:String})

// const user = new User({
//     name : 'Harkirat Singh',
//     email:'random@gmail.com', 
//     password:'1234'})
// user.save(); // this is must for savig the data in the mongodb

// we try to create a signup end 
app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // a normal check whether the user email already exists or not
    const existingUser = await User.findOne({email:username}); // findOne is checking function
    // CRUD => Create, Read, Update and Delete
    if(existingUser){
        return res.status(400).send("username already exists")
    }

    const user = new User({
        name:name,
        email:username,
        password:password
    })

    user.save()
    res.json({
        "msg": "user created successfully"
    })
})

app.listen(3000)