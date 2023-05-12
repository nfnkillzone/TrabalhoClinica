const Sequelize = require("sequelize");

const DB_NAME = "la_vie_saude_mental";
const DB_USER = "root";
const DB_PASS = "Leandrosouza82!";
const DB_CONFIG = {
    host: "localhost",
    dialect: "mysql",
    port: 3306
};

let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
   } catch (error) {
     console.error("Error ao conectar com o banco de dados",error.original);
   }
   
   async function hasConection(){
       try {
           await db.authenticate();
           console.log("Bando de dados conectado!");
       } catch (error) {
           console.error("Erro ao tentar se conectar ao bando de dados", error.original);
       }
   }
   
   Object.assign(db, {
       hasConection,
   });

   module.exports = db;