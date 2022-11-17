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
      [1000, "VISITOR_USER"],
      [2000, "CREATOR_USER"],
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

db.initKennelBreeds = () => {
  const sql = "INSERT INTO KennelBreed (name, url, groupId) VALUES ?";
  const query = mysql.format(sql, [hundRaser]);

  pool.query(query, (err) => {
    if (err) {
      console.log("Error inserting Kennelbreeds from json filer", err);
    } else {
      console.log();
    }
  });
};

db.setKennelWithU = (breedname, groupId, userId, username, location) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO KennelUser (kennelUserId, breedname, groupId, userId, username, location) VALUES (?)";
    const query = mysql.format(sql, [
      [null, breedname, groupId, userId, username, location],
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

db.getAllBreeds = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM KennelBreed";
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
db.getbreeds = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM KennelBreed";
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
db.getBreedIdByName = (name) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT breedId FROM KennelBreed WHERE name = ?";
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
db.getGroupIdByBreedId = (breedId) => {
  console.log(breedId);
  return new Promise((resolve, reject) => {
    const sql = "SELECT groupId FROM KennelBreed WHERE breedId = ?";
    const query = mysql.format(sql, breedId);
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
    const sql = `UPDATE UsersWithRoles SET roleId = roleId WHERE userId = userId`;
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

// Skapa /koppla thema
db.setProfile = (userId, bgColor, textColor, font, text, title) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO Profile ( userId, bgColor,textColor, font, text, title) VALUES (?)";
    const query = mysql.format(sql, [
      [userId, bgColor, textColor, font, text, title],
    ]);
    pool.query(query, (err, result) => {
      if (err) {
        console.log("error!");
        return reject(err);
      }
      return resolve(result);
    });
  });
};
// få profil genom id
db.getProfileFromUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT userId, bgColor,textColor, font, text, title FROM Profile WHERE userId = ?";
    const query = mysql.format(sql, userId);
    pool.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
};

db.updateProfile = (font, userId, bgColor, textColor, text, title) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE Profile SET font=font, bgColor=bgColor, textColor=textColor, text=text, title=title WHERE userId = userId";
    const query = mysql.format(sql, [
      font,
      userId,
      bgColor,
      textColor,
      text,
      title,
    ]);
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
