// const express = require("express");
// const app = express();


// // below code is just a dumb way of doing input validation 
// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "harkirat" || password != "pass") {
//     res.status(400).json({ "msg": "something up with your inputs" });
//     return;
//   }

//   if (kidneyId != 1 &&  kidneyId != 2) {
//     res.status(400).json({ "msg": "something up with your inputs" });
//   }

//   // do something with your kidney here
//   res.json({
//     msg: "your kidney is fine! ",
//   });
// });

// app.listen(3000);


// les do some real shit

// const express = require("express")
// const app = express()

// creating middleware
function userMiddleware(req,res,next){ // next : used for transition from one function to other
  if(username != "harkirat" && password != "pass"){
    res.status(403).json({
      msg:"Incorrect inputs",
    })
  }
  else{
    next()
  }
}

function kidneyMiddleware(req,res,next){
  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({
      msg: "Incorrect inputs",
    })
  }
  else{
    next()
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
  // do something with kidney here
  res.send("Your heart is healthy")
})

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req,res){
  res.send("your heart is healthy")
})

app.get("/heart-check", userMiddleware, function(req,res){
  // do something with user here
  res.send("your heart is healthy")
})

// some more usable middlewares


const express = require("express")
const app = express()

// rate-limitting
let numberOfRequests = 0
function calculateRequests(req,res,next){
  numberOfRequests++
  console.log(numberOfRequests)
  next()
}

app.get("/health-checkup", calculateRequests, function(req,res){

})

app.listen(3000)