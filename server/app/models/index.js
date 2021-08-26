const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.applicantdata = require("./applicantdata.model.js")(sequelize, Sequelize);
db.applicanteducation = require("./applicanteducation.model.js")(sequelize, Sequelize);
db.applicantexperience = require("./applicantexperience.model.js")(sequelize, Sequelize);
db.listdegree = require("./listdegree.model.js")(sequelize, Sequelize);
db.listposition = require("./listposition.model.js")(sequelize, Sequelize);

module.exports = db;
