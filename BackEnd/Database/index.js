
const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config/config.json");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./models/user")(sequelize, DataTypes);
db.class = require("./models/class")(sequelize, DataTypes);

const connect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// db.sequelize.sync({ force: true });

connect();
module.exports = db;

