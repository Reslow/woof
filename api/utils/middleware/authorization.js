const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log(accessToken);
  if (!accessToken) {
    return res.sendStatus(401).json({ response: "not Authorized" });
  }
  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.id;
    req.role = data.roles;
    req.email = data.email;
    return next();
  } catch (e) {
    return res.sendStatus(401).json({ response: "not Authorized" });
  }
};

const adminAuthorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(data);
    if (!data.role.includes("ADMIN_USER")) {
      return res.sendStatus(403);
    }
    req.userId = data.id;
    req.userRoles = data.roles;
    req.email = data.email;
    return next();
  } catch (e) {
    console.log(e.message);
    return res.sendStatus(401);
  }
};

const creatorAuthorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!data.roles.includes("CREATOR_USER")) {
      return res.sendStatus(403);
    }
    req.userId = data.id;
    req.userRoles = data.roles;
    req.email = data.email;
    return next();
  } catch (e) {
    return res.sendStatus(401);
  }
};

module.exports = { authorization, adminAuthorization, creatorAuthorization };
