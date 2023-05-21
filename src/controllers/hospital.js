const {models} = require('../models');



// Crear un  hospital
exports.create = async function (name, city) {
    try {
       
        let hospital = models.Hospital.build({
            name:name,
            city:city
        });

        
       return hospital = await hospital.save({fields: ["name", "city"]});
        

        

    } catch (error) {
        console.log("Throw new error");
    }
};

// Devuelve todos los hospitales
exports.index = async function () {
    return Hospitales = await models.Hospital.findAll();
};

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    let Hospitales = await models.Hospital.findAll({
        where :{
            city:city
        }
        });
        return Hospitales;
};

