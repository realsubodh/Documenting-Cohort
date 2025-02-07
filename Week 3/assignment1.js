/**  Assignment : A website which have 2 endpoints
    POST/SIGN IN (return a jwt with username encrypted)          GET/USERS (return an array of all users if user is signed in (token is correct), and return 403 status code if not)
*/

const express = require("express")
const jwt = require("jsonwebtoken")  // you are suppose to install jsonwebtoken along with express in the terminal
const jwtPassword = "123456"

const app = express()

const ALL_USERS = [
    {
        username: "subodh@gmail.com",
        passoword: "123",
        name:"Subodh Singh"
    },
    {
        username:"aadi@gmail.com",
        passoword:"1234",
        name:"Aadi"
    },
    {
        username:"shivam@gmail.com",
        passoword:"12345",
        name:"Shivam Singh"
    }
]

function userExists(username, password){
    // hard todo - try to use the find function in js
    const userExists = false;
    for (let i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "user doesnot exist in our in memomory database",
        })
    }

    var token = jwt.sign({username : username},"shhhh")
    return res.json({
        token,
    })
})

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username;

        // return a list of users other than this username
    }
    catch(err){
        return res.status(403).jsom({
            msg:"invalid token",
        })
    }
})

app.listen(3000)