const {models} = require('../models');
const sequelize = new Sequelize("sqlite:db.sqlite");

// Muestra la informacion de un paciente
exports.read = async function (patientId) {
    return patient =await models.patient.findByPk(patientId);
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    let pacient= await models.patient.build({
        name:name,
        surname:surname,
        dni:dni,
        hospitalId:hospitalId
    });
    pacient = await pacient.save({files:["name","surname","dni","hospitalId"]});
    return pacient;
}

// Actualiza un paciente
exports.update = async function (patientId, name, surname, dni) {
    let patient = await models.patient.findByPk(patientId);
    patient.name=name;
    patient.surname=surname;
    patient.dni=dni;
    
    return patient;
}

// Borra un paciente
exports.delete = async function (patientId) {
    let pacienteBorrado= await models.findByPk(patientId);
    pacienteBorrado.destroy();
    return pacienteBorrado;
}


// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
   let pacientesEnOrden= await models.pacient.findAll({
    where:
    hospitalId=hospitalId
   });
   return pacientesEnOrden;
}
