// Mongoose is used to write down the datas in the MongoDB in layman terms.
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://subodhsingh3477:FridaY7880@cluster0.k5y3sbt.mongodb.net/")


// mongoose expect us to first describe the somehow the schema will look alike
const User = mongoose.model('Users', {name:String, email:String, password:String})

const user = new User({
    name : 'Harkirat Singh',
    email:'random@gmail.com', 
    password:'1234'})
user.save(); // this is must for savig the data in the mongodb