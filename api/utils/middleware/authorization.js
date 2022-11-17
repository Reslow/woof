const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.sendStatus(401).json({ response: "not Authorized" });
  }
  const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  console.log("DATA", data);
  return next();
};

const adminAuthorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log(accessToken);
  if (!accessToken) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!data.role.includes("ADMIN_USER")) {
      return res.sendStatus(403);
    }
    req.userId = data.userId;
    req.userRoles = data.role;
    return next();
  } catch (e) {
    console.log(e.message);
    return res.sendStatus(401);
  }
};

const creatorAuthorization = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log(accessToken);
  if (!accessToken) {
    return res.sendStatus(401).json({ response: "not Authorized, DÅ" });
  }
  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!data.role === "CREATOR_USER") {
      return res.sendStatus(403);
    } else {
      req.userId = data.userId;
      req.userRoles = data.role;
      req.email = data.email;
      return next();
    }
  } catch (e) {
    console.log("chekc", e);
    return res.sendStatus(401).json({ response: "not Authorized, hej" });
  }
};

module.exports = { authorization, adminAuthorization, creatorAuthorization };
