const mysql = require("mysql");
require("dotenv").config();
const hundGrupp = require("./helpers/hundData_grupper.json");
const hundRaser = require("./helpers/hundData_ras.json");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  multipleStatements: false,
});

let db = {};

//initiera roller
db.initRoles = () => {
  const sql = "INSERT INTO Roles (roleId, rolename) VALUES ?";
  const query = mysql.format(sql, [
    [
      [1000, "VISITER_USER"],
      [2000, "CREATER_USER"],
      [3000, "ADMIN_USER"],
    ],
  ]);

  pool.query(query, (err) => {
    if (err) {
      console.log("Error inserting roles", err);
    } else {
      console.log("Successfully inserted roles", err);
    }
  });
};

db.initKennelGroups = () => {
  const sql = "INSERT INTO Kennelgroup (name, url) VALUES ?";
  const query = mysql.format(sql, [hundGrupp]);

  pool.query(query, (err) => {
    if (err) {
      console.log("Error inserting KennelGroups", err);
    } else {
      console.log("Successfully inserted kennelgruops from json file");
    }
  });
};

db.initKennelBreads = () => {
  const sql = "INSERT INTO KennelBread (name, url, groupId) VALUES ?";
  const query = mysql.format(sql, [hundRaser]);

  pool.query(query, (err) => {
    if (err) {
      console.log("Error inserting Kennelbreads from json filer", err);
    } else {
      console.log();
    }
  });
};

db.setKennelWithU = (breadname, groupId, userId, username, location) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO KennelUser (kennelUserId, breadname, groupId, userId, username, location) VALUES (?)";
    const query = mysql.format(sql, [
      [null, breadname, groupId, userId, username, location],
    ]);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

db.createUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO Users (userId, username, email, password) VALUES (?)";
    const query = mysql.format(sql, [[null, username, email, password]]);
    pool.query(query, async (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

db.getAllKennels = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM KennelUser";
    const query = mysql.format(sql);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

db.getAllBreads = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM KennelBread";
    const query = mysql.format(sql);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

db.getAllGroups = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM Kennelgroup";
    const query = mysql.format(sql);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};
// få tag på alla users
db.getUsers = () => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT * FROM Users u INNER JOIN UsersWithRoles uwr ON u.userId = uwr.userId INNER JOIN Roles r ON r.roleId = uwr.roleId";
    const query = mysql.format(sql);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

// få tag på alla raser
db.getbreads = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM KennelBread";
    const query = mysql.format(sql);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

// få users genom id
db.getBreadIdByName = (name) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT breadId FROM KennelBread WHERE name = ?";
    const query = mysql.format(sql, name);
    pool.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

// få users genom id
db.getGroupIdByBreadId = (breadId) => {
  console.log(breadId);
  return new Promise((resolve, reject) => {
    const sql = "SELECT groupId FROM KennelBread WHERE breadId = ?";
    const query = mysql.format(sql, breadId);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

// få users genom id
db.getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT userId, email, roleId, username FROM Users WHERE userId = ?";
    const query = mysql.format(sql, userId);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};
// få user genom email
db.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM Users WHERE email = ?";
    const query = mysql.format(sql, [email]);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

// få rollen på user med userID
db.getUserWithRole = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT roleId FROM UsersWithRoles WHERE userId = ?";
    const query = mysql.format(sql, [userId]);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

// koppla user med roll
db.setUserWithRole = (userId, roleId) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO UsersWithRoles (userId,roleId) VALUES (?)";
    const query = mysql.format(sql, [[userId, roleId]]);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

// få rollnamnet genom id
db.getRoleById = (roleId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT roleId, rolename FROM Roles WHERE roleId = ?";
    const query = mysql.format(sql, [roleId]);
    pool.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

//updatera rollen
db.updateUserRole = (userId, roleId) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE UsersWithRoles SET roleId = ${roleId} WHERE userId = ${userId}`;
    const query = mysql.format(sql, userId, roleId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

//skapa en textSection

db.setTextSection = (name, title, body, userId) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO textSection (name, title, body, userId) VALUES (?)";
    const query = mysql.format(sql, name, title, body, userId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};
// set en text MED BILD Section

db.setTextAndImageSection = (
  name,
  title,
  body,
  userId,
  url,
  alt,
  align,
  imageText
) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO textWithImageSection (name, title, body, userId, url, alt, align,imageText) VALUES (?)";
    const query = mysql.format(
      sql,
      name,
      title,
      body,
      userId,
      url,
      alt,
      align,
      imageText
    );
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

// set samling av sektioner
db.setSections = (sectionsId, userId) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO sections (sectionsId, userId) VALUES (?)";
    const query = mysql.format(sql, sectionsId, userId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

// Skapa /koppla thema
db.setTheme = (userId, bgColor, textColor, font) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO theme (userId, bgColor,textColor, font) VALUES (?)";
    const query = mysql.format(sql, userId, bgColor, textColor, font);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

// skapa profil  med user, theme och sections
db.setProfile = (userId, themeId, sectionsId) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO Profile (userId, themeId, sectionsId) VALUES (?)";
    const query = mysql.format(sql, userId, themeId, sectionsId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result.insertId);
    });
  });
};

// få profil genom id
db.getProfileFromUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT themeId, sectionsId, FROM Profile WHERE userId = ?";
    const query = mysql.format(sql, userId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

module.exports = db;
