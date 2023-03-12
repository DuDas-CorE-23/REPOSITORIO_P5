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
    let patient = await models.patient.findByPk(patientId);
    let doctor = await models.patient.findByPk(doctorId);

    return patient = await patient.addDoctor(doctor);
}

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    let doctors = await models.patient.findAll({
        where : {
           patientId : patientId
        }
    })

    return doctors;
}
