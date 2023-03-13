const {models} = require('../models');



// Crear un  hospital
exports.create = async function (name, city) {
    try{
        let hospital =  models.hospital.build(
            name=name,
            city=city
        );
        hospital =await models.hospital.save({fields:["name","city"]});
        return hospital;
    }catch(error){}
    };
    

// Devuelve todos los hospitales
exports.index = async function () {
    return Hospitales = await models.hospital.findAll();
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    let Hospitales = await models.hospital.findAll({
        where :{
            city:city
        }
        });
        return Hospitales;
}

