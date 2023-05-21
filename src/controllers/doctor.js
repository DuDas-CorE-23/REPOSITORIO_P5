const {models} = require('../models');



// Crear un doctor
exports.create = async function (name, surname, speciality) {
    try {
        
        let doctor = models.Doctor.build({
            name:name,
            surname:surname,
            speciality:speciality
        });

        try{
         return doctor = await doctor.save({fields: ["name", "surname", "speciality"]});
        }catch{error}{
            
        }
       

    } catch (error) {
        
    }
};

// Asigna un doctor y devuelve los datos del paciente
exports.assignDoctor = async function (patientId, doctorId) {
    let patient = await models.Patient.findByPk(patientId);
    let doctor = await models.Doctor.findByPk(doctorId);

    return patient = await patient.addDoctors(doctor);

    
};

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    let patient = await models.Patient.findByPk(patientId);
    return doctors = await patient.getDoctors();

};
