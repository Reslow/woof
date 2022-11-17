const mysql_module = require("mysql");

require("dotenv").config();

const DB_HOST_ = process.env.DB_HOST;
const DB_USER_ = process.env.DB_USER;
const DB_PASSWORD_ = process.env.DB_PASSWORD;
const DB_DATABASE_ = process.env.DB_DATABASE;
const DB_PORT_ = process.env.DB_PORT;

const db_ = mysql_module.createConnection({
  host: DB_HOST_,
  user: DB_USER_,
  password: DB_PASSWORD_,
  database: DB_DATABASE_,
  port: DB_PORT_,
});

db_.connect(async (err, connection) => {
  console.log("RUNNING CREATE TABLE SCRIPT");
  let createUsersTable = `CREATE TABLE IF NOT EXISTS Users (
    userId int NOT NULL AUTO_INCREMENT,
    email varchar(100) NOT NULL, 
    username varchar(45) NOT NULL, 
    opt varchar(100), 
    password varchar(100) NOT NULL, 
    PRIMARY KEY (userId))
    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    `;

  let createKennelGroupTable = `CREATE TABLE IF NOT EXISTS Kennelgroup (
          groupId int(1) AUTO_INCREMENT NOT NULL,
          name varchar(45) NOT NULL, 
          url varchar(100) NOT NULL, 
          PRIMARY KEY (groupId))
          ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
          `;

  let createKennelBreedTable = `CREATE TABLE IF NOT EXISTS KennelBreed (
      breedId int NOT NULL AUTO_INCREMENT ,
      name varchar(45) NOT NULL, 
      url varchar(100) NOT NULL,  
      groupId int NOT NULL, 
      PRIMARY KEY (breedId))
      ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `;
  let createKennelUserTable = `CREATE TABLE IF NOT EXISTS KennelUser (
        kennelUserId Int NOT NULL AUTO_INCREMENT,
        groupId int NOT NULL,
        breedname varchar(45) NOT NULL, 
        userId int NOT NULL ,
        username varchar(45) NOT NULL, 
        location varchar(45) NOT NULL,
        PRIMARY KEY (kennelUserId))
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        `;

  let createKennelTable = `CREATE TABLE IF NOT EXISTS Kennel (
            kennelId int NOT NULL,
            groupId int NOT NULL,
            breedId int NOT NULL, 
            userId int NOT NULL ,
            PRIMARY KEY (kennelId))
            ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
            `;
  let createRolesTable = `CREATE TABLE IF NOT EXISTS Roles (
    roleId int NOT NULL AUTO_INCREMENT,
    rolename varchar(45) NOT NULL,
    PRIMARY KEY (roleId)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;

  let createUsersWithRoleTable = `CREATE TABLE IF NOT EXISTS UsersWithRoles (
    userId int NOT NULL,
    roleId int NOT NULL,
    CONSTRAINT FK_Role FOREIGN KEY (roleId) REFERENCES Roles(roleId),
    CONSTRAINT FK_User FOREIGN KEY (userId) REFERENCES Users(userId)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;

  let createProfileTable = `CREATE TABLE IF NOT EXISTS Profile (
    userId int NOT NULL,
    bgColor varchar(45) NOT NULL,
    textColor varchar(45) NOT NULL,
    font varchar(45) NOT NULL,
    title varchar(45) NOT NULL,
    text varchar(500) NOT NULL,
    PRIMARY KEY (userId) 
    )  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;

  try {
    await new Promise((resolve, reject) => {
      db_.query(createUsersTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve("CREATE USER TABLE");
        }
      });
    });

    await new Promise((resolve, reject) => {
      db_.query(createRolesTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve("CREATE ROLE TABLE");
        }
      });
    });

    await new Promise((resolve, reject) => {
      db_.query(createUsersWithRoleTable, async (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("CREATE USER WITH ROLE");
        }
      });
    });

    await new Promise((resolve, reject) => {
      db_.query(createKennelTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve("CREATE KENNEL TABLE");
        }
      });
    });

    await new Promise((resolve, reject) => {
      db_.query(createKennelGroupTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve("CREATE kennelGroup TABLE");
        }
      });
    });
    await new Promise((resolve, reject) => {
      db_.query(createKennelBreedTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve("CREATE kennelBreed TABLE");
        }
      });
    });
    await new Promise((resolve, reject) => {
      db_.query(createKennelUserTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve("CREATE kennelBreed TABLE");
        }
      });
    });
    await new Promise((resolve, reject) => {
      db_.query(createProfileTable, async (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve("CREATE profile TABLE");
        }
      });
    });
  } catch (err) {
    console.log("ERROR CREATING TABLES: ", err);
    process.exit(1);
  }
});
