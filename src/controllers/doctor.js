const {models, model} = require('../models');

// Crear un doctor
exports.create = async function (name, surname, speciality) {
    let doctor = await models.doctor.build(
        name = name,
        surname =surname,
        speciality=speciality

    );
    return doctor;
};


// Asigna un doctor y devuelve los datos del paciente
exports.assignDoctor = async function (patientId, doctorId) {
    // Rellene aqui ...
}

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    // Rellene aqui ...
}
