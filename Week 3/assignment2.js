/* Assignment : we have to create three endpoints, users - BE - DBs in which 
    1. Basic Signup endpoint
    2. Sign in, with in return we get the JWT Token but after verification of BE and DBs
    3. When BE is expecting header but user send jwt and gets backs all the users and return it to the user.
*/

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const jwtPassword = "verify";

const app = express();
app.use(express.json());

mongoose.connect(
  "Mongo Url"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

// Signup Endpoint
app.post("/signup", async function (req, res) {
  const { username, password, name } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists!");
  }

  // Create new user
  const user = new User({ name, email: username, password });
  await user.save();

  res.json({ msg: "User created successfully!" });
});

// Sign-in Endpoint
app.post("/signin", async function (req, res) {
  const { username, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email: username });

  if (!existingUser) {
    return res.status(400).send("Username does not exist! Please Sign Up.");
  }

  // Check Password
  if (existingUser.password !== password) {
    return res.status(400).send("Wrong password!");
  }

  // Generate JWT token
  const token = jwt.sign({ email: username }, jwtPassword);

  return res.json({ token });
});

// Get Users (Authenticated)
app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).send("No token provided!!");
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.email; // Extract email from the token payload

    // Fetch all users
    const allUsers = await User.find({});

    // Filter out the current user from the response
    const filteredUsers = allUsers.filter((user) => user.email !== username);

    res.json(filteredUsers);
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid or expired token!");
  }
});

// Start the Server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
