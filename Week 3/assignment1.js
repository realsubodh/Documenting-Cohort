/**  Assignment : A website which have 2 endpoints
    POST/SIGN IN (return a jwt with username encrypted)          GET/USERS (return an array of all users if user is signed in (token is correct), and return 403 status code if not)
*/

const express = require("express")
const jwt = require("jsonwebtoken")  // you are suppose to install jsonwebtoken along with express in the terminal
const jwtPassword = "123456"

const app = express()
app.use(express.json()) // omp for the decoding the body otherwise the server will throw the error
const ALL_USERS = [
    {
        username: "subodh@gmail.com",
        password: "123",
        name:"Subodh Singh"
    },
    {
        username:"aadi@gmail.com",
        password:"1234",
        name:"Aadi"
    },
    {
        username:"shivam@gmail.com",
        password:"12345",
        name:"Shivam Singh"
    }
]

function userExists(username, password){
    // hard todo - try to use the find function in js
    let userExists = false;
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

    var token = jwt.sign({username : username},jwtPassword)
    return res.json({
        token,
    })
})

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username;

        // return a list of users other than his username
        // that means user can see the other users rather than himself oly.
        res.json({
            users:ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false
                }
                else{
                    return true;
                }
            })
        })
    }
    catch(err){
        return res.status(403).json({
            msg:"invalid token",
        })
    }
})

app.listen(3000)


// remember JWT is a kinda of library which provides us a lot of features
// and common one which we use most is signin and verify.