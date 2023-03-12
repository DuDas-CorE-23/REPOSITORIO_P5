const {models} = require('../models');

// Crear un  hospital
exports.create = async function (name, city) {
    let hospital = models.hospital.build(
        name=name,
        city=city
    );
    hospital =await models.hospital.save({fields:["name","city"]});
    return hospital;
};

// Devuelve todos los hospitales
exports.index = async function () {
    return Hospitales =models.hospital.findAll();
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    let Hospitales =models.hospital.findAll({
        where :{
            city:city
        }
        });
        return Hospitales;
}

