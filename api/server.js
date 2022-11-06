const express = require("express");
const db = require("./database");
const cors = require("cors");

require("dotenv").config();
const bcrypt = require("bcrypt");
const { getUsers } = require("./database");
const app = express();
const port = process.env.PORT;

// EXPLAIN! : app.use is a function that adds a middleware, express.json() that parses incoming JSON requests and puts the parsed data in req.body express.urlencoded:  parses incoming requests with urlencoded payloads.
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// db.initRoles();
// create superuser

app.get("/api/users", async (req, res) => {
  try {
    const users = await db.getUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log("Error in getting users: ", err);
    return res.sendStatus(400);
  }
});

// app.get("/api/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;

//     if (isNaN(Number(id))) {
//       return res.status(400).json({ message: "ID need to be integer" });
//     }

//     const user = await db.getUserById(id);
//     console.log(user);
//     return res.status(200).json(user);
//   } catch (err) {
//     console.log("Error in getting users: ", err);
//     return res.sendStatus(400);
//   }
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     console.log("LOGIN BODY:", req.body);
//     const email = req.body.email;
//     let password = req.body.password;
//     // 1. Check if user already exists
//     const user = await db.getUserByEmail(email);
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }
//     // 2. Compare password
//     if (!(await bcrypt.compare(password, user.password))) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }
//     // 3. Get User Roles
//     // 4. Sign JWT Token with userRoles
//     // 5. Set accessToken cookie and return data
//     return res.status(200).json({
//       userId: user.userId,
//       email: email,
//       username: user.username,
//     });
//   } catch (err) {
//     console.log("Error trying login: ", err);
//     return res.sendStatus(400);
//   }
// });

app.post("/api/user", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const roleId = req.body.type;

    // 1. Check for empty data in input
    if (!username || !email || !password) {
      return res.sendStatus(400);
    }
    //check if user exist

    const user = await db.getUserByEmail(email);
    if (user) {
      if (user.roleId === 1000) {
        return res
          .status(409)
          .json({ message: "This Email is used in another account" });
      } else {
        console.log("update");
        await db.updateUserRole(user.userId, 2000);
        console.log("UPDATED");
      }
      const dbu = await getUsers();
      console.log("db", dbu);
      console.log("user", user, "user");
    }

    // hash and register user
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await db.createUser(username, email, hashedPassword, roleId);
    await db.setUserWithRole(userId, roleId);

    //   // add user to list om hen inte existerar

    // TODO;
    // kolla att role inte är SuperUSEr!!!

    // 6. Set accessToken cookie

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
    console.log(`Error listening on port: ${port}`, err);
  } else {
    console.log(`Succesfully listening on port: ${port}!`);
  }
});
