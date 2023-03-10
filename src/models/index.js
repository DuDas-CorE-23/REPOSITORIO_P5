const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Sequelize(url,{logging:false})   // Rellene aqui ...


const patient=require(`patient`)(sequelize, Sequelize.DataTypes);
const hospital=require(`hospital`)(sequelize, Sequelize.DataTypes);
const doctor=require(`doctor`)(sequelize, Sequelize.DataTypes);



// Relationships

// Rellene aqui ...


module.exports = exports = sequelize;
