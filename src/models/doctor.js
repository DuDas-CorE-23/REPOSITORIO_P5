'use strict';

const {Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize("sqlite:db.sqlite");


// Definition of the Quiz model:
module.exports = sequelize => {

    class Doctor extends Model {
    }

    // Inicialize el modelo Doctor aqui
    Doctor.init({
      
    speciality :{
        type:DataTypes.STRING,
    },
     surname :{
        type:DataTypes.STRING,
     },
     name :{
        type:DataTypes.STRING,
     } 
    },
    {sequelize}

    );

    return Doctor;
};