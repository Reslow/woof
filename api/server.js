const express = require("express");
const db = require("./database");
require("dotenv").config();
const bcrypt = require("bcrypt");

const app = express();

const port = process.env.PORT;
console.log(port);

// EXPLAIN! : app.use is a function that adds a middleware, express.json() that parses incoming JSON requests and puts the parsed data in req.body express.urlencoded:  parses incoming requests with urlencoded payloads.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.initRoles();
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.getUsers();
    console.log(users);
    return res.status(200).json(users);
  } catch (err) {
    console.log("Error in getting users: ", err);
    return res.sendStatus(400);
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID", id);

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID need to be integer" });
    }

    const user = await db.getUserById(id);
    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    console.log("Error in getting users: ", err);
    return res.sendStatus(400);
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // 1. Check for empty data in input
    if (!username || !email || !password) {
      return res.sendStatus(400);
    }
    //check if user exist
    const user = await db.getUserByEmail(email);
    if (user) {
      return res
        .status(409)
        .json({ message: "This Email is used in another account" });
    }
    // hash and register user

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await db.createUser(username, email, hashedPassword);

    // 4. Assign ROLE to USER
    // 5. Get ROLES for USER
    // 6. Set accessToken cookie and

    return res.status(200).json({
      userId: userId,
      email: email,
      username: username,
    });
  } catch (err) {
    console.log("Error in register user: ", err);
    return res.sendStatus(400);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error listening on port: ${port}`, errs);
  } else {
    console.log(`Succesfully listening on port: ${port}!`);
  }
});
