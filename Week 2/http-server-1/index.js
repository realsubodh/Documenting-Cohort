const express = require("express")
const nodemon = require("nodemon")
const port = 3000     // defining the local port host
const app = express()

app.get('/', (req,res)=>{
    res.send('hello express')   //sending a get request
})
app.post('/conversation', (req,res)=>{
    console.log(req.headers)   // way of accessing the headers, you can go particular also like req.authorization, etc.
    res.send('<b>Getting a post request</b>')   // post request
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

/*procedure of installing the nodemon(auto starting)
 command: npx nodemon index.js*/

// install the bodyParser for extracting the body.