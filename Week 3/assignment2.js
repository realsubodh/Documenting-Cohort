/* Assignment : we have to create three endpoints, users - BE - DBs in which 
    1. Basic Signup endpoint
    2. Sign in, with in return we get the JWT Token but after verification of BE and DBs
    3. When BE is expecting header but user send jwt and gets backs all the users and return it to the user.
*/

const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const jwtPassword = "verify"


const app = express
app.use(express.json())

mongoose.connect("mongodb+srv://subodhsingh3477:FridaY7880@cluster0.k5y3sbt.mongodb.net/userappnew")

