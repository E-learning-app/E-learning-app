const  Sequelize  = require('sequelize');
const config = require('./config/config.json')
const db =require('./models/')

const sequelize = new Sequelize(
    'hello_world_db',
    config.database,
    config.password,
    config.user,
     {
       host: config.host,
       dialect: 'mysql',
       logging :false ,
     }
   );
   const db={}
   db.sequelize =sequelize
   db.Sequelize =Sequelize
   db.user =require("./models/user")(sequelize,DataTypes)

   db.sync().sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
