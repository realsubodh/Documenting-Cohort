/*
 What is ZOD ??
 An easy way to perform input validation, leading in clean and efficient production grade code

 TypeScript-first """schema validation""" with static type inference
 
 whenever you give wrong input then ZOD will return you each and everything that is wrong in your input and you can use all those as endpoints
 in showing all the error msgs on the UI.

 -- npm install zod

*/

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); // expecting an array of numbers
// schema is used to define the structure of your input, which is in our case is array of number of kidneys

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
      errors: response.error.errors
      
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);
