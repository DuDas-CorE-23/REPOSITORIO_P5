'use strict';

const {Model, DataTypes} = require('sequelize');

// Definition of the Quiz model:
module.exports = sequelize => {

    class Patient extends Model {
    }

    // Inicialize el modelo Patient aqui
    Patient.init({

        dni :{
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

    return Patient;
};