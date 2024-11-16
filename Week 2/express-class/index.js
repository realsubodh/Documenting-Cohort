// gonna to build a hospital layout server below

const express = require("express");
const app = express();

// inmemory database
const users = [
  {
    name: "Subodh",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json()) // this will help to parse the json body without using middlewares as of now.



// in this we are gonna to use query parameter in the URL
app.get("/", function (req, res) {
  // get request, only retrieving data
  const subodhKidneys = users[0].kidneys;
  const numberofKidneys = subodhKidneys.length;
  let numberofHealthyKidneys = 0;
  for (let i = 0; i < subodhKidneys.length; i++) {
    if (subodhKidneys[i].healthy) {
      numberofHealthyKidneys = numberofHealthyKidneys + 1;
    }
  }
  const numberofUnealthyKidneys = numberofKidneys - numberofHealthyKidneys;
  res.json({
    numberofKidneys,
    numberofHealthyKidneys,
    numberofUnealthyKidneys,
  });
});

// preparing a post request: feeding any data
// in post request we are gonna to use the different input parameter in the logic
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy; // asking the user
  users[0].kidneys.push({ 
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  })
});


// preparing a put request where a user can replace a kidney and make it healthy
app.put("/", function(req,res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})  // if u don't put res.json then the system will hung
})


// preparing delete request, removing unhealthy kidneys
app.delete("/", function(req,res){
    const newKidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done!"})
})
app.listen(3000);
