const express = require("express");
const db = require("./database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { addMinutes } = require("./helpers/helper");
const {
  authorization,
  creatorAuthorization,
  adminAuthorization,
} = require("./utils/middleware/authorization");

require("dotenv").config();
const bcrypt = require("bcrypt");
const app = express();
const port = process.env.PORT;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

async function createADMIN() {
  const pwd = process.env.ADMIN_P;
  console.log("check", pwd);
  const hashedPassword = await bcrypt.hash(pwd, 10);
  const adminId = await db.createUser(
    process.env.ADMIN_U,
    process.env.ADMIN_E,
    hashedPassword
  );
  await db.setUserWithRole(adminId, parseInt(process.env.ADMIN_R));
  console.log("ADMIN CREATED");
}

async function startServer() {
  //start the server and setup db with setup.
  //admin info in hidden env.
  db.initRoles();
  db.initKennelBreads();
  db.initKennelGroups();
  createADMIN();
}

// startServer();
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.getUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log("Error in getting users: ", err);
    return res.sendStatus(400);
  }
});

app.get("/api/getprofile", authorization, async (req, res) => {
  const userId = req.userId;
  const profile = await db.getProfileFromUserId(userId);
  const ads = await db.getAdsFromUserId(userId);
  console.log("ads", ads);
  console.log("profile", profile);
  return res.status(200).json({ data: { profile, ads } });
});
app.post("/api/myprofile", creatorAuthorization, async (req, res) => {
  return res.status(200).json({ data: { profile, ads } });
});

app.get("/api/kennels", authorization, async (req, res) => {
  const kennelList = await db.getAllKennels();
  const dogBreeds = await db.getAllBreads();
  const dogGroups = await db.getAllGroups();

  return res.status(200).json({
    kennel: kennelList,
    breeds: dogBreeds,
    groups: dogGroups,
  });
});

let storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

app.get("/api/admin", adminAuthorization, async (req, res) => {
  const users = await db.getUsers();
  return res.status(200).json({ data: users });
});

app.post("/api/signin", async (req, res) => {
  try {
    const email = req.body.email;
    let password = req.body.password;
    const users = await db.getUsers();
    const user = await db.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const data = await db.getUserWithRole(user.userId);
    const role = await db.getRoleById(data.roleId);
    const token = jwt.sign(
      { role: role.rolename, email: email, userId: user },
      ACCESS_TOKEN_SECRET,

      {
        expiresIn: "20m",
      }
    );
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: addMinutes(10),
        maxAge: addMinutes(10),
      })
      .status(201)
      .json({
        token: token,
        email: email,
        userId: user.userId,
        username: user.username,
        role: role.rolename,
      });
  } catch (err) {
    return res.sendStatus(400).json({
      response: "problems with login",
    });
  }
});

app.get("/api/user", authorization, async (req, res) => {
  const userId = req.query.id;
  const user = await db.getUserById(userId);
  const profile = await db.getProfileFromUserId(userId);
  return res.status(200).json({
    userId: user.userId,
    email: user.email,
    username: user.username,
    profile: profile,
  });
});

app.get("/api/logout", (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

app.post("/api/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const bread = req.body.option_breed;
    const location = req.body.option_location;
    let roleId = 1000;
    if (req.body.type === "kennel") {
      roleId = 2000;
    }
    if (!username || !email || !password) {
      return res
        .sendStatus(400)
        .json({ message: "credentials not filled out correctly" });
    }
    const user = await db.getUserByEmail(email);
    if (user) {
      if (user.roleId === 1000) {
        return res
          .status(409)
          .json({ message: "This Email is used in another account" });
      } else if (user.roleId === 2000) {
        return res
          .status(409)
          .json({ message: "This Email is used in another account" });
      } else {
        await db.updateUserRole(user.userId, 2000);
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await db.createUser(username, email, hashedPassword);
    await db.setUserWithRole(userId, roleId);
    const role = await db.getRoleById(roleId);

    if (roleId === 2000) {
      console.log(bread);
      const dataBreed = await db.getBreadIdByName(bread);
      console.log(dataBreed, "br");
      const dataGroup = await db.getGroupIdByBreadId(dataBreed.breadId);
      console.log(dataGroup);
      db.setKennelWithU(bread, dataGroup.groupId, userId, username, location);
    }

    const token = jwt.sign(
      { role: role.rolename, email: email, userId: user },
      ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2m",
      }
    );
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: addMinutes(10),
        maxAge: addMinutes(10),
      })
      .status(201)
      .json({
        userId: userId,
        token: token,
        email: email,
        username: username,
        role: role.rolename,
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
