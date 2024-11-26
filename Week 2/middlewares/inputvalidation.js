// performing input validation

const express = require("express")
const app = express()

app.use(express.json()); // this will help in extracting the body from the post request
// remember app.use should be at the top always, means before routes
app.post("/health-checkup", function(req,res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys
    // below one is one of the lazy method of Input validation
    // if(!kidneys){
    //     res.json({
    //         msg:"wrong inputs"
    //     })
    // }
    // else{
    //     const kidneyLength = kidneys.length;
    //     res.send("you have "+ kidneyLength + " kidneys")
    // }
    res.send("you have "+ kidneyLength + " kidneys")
})



// one more middleware, i.e Global Catches 
// global catches is used for encrypting the backend logic to get exposed to the others when the server is crashed or something, and it always puts in the end

app.use(function(err,req,res,next){ // hides the exceptions
    res.json({
        msg: "Sorry something is up with our server"
    })
})
app.listen(3000)