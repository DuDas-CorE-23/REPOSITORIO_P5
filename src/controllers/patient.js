const {models} = require('../models');


// Muestra la informacion de un paciente
exports.read = async function (patientId) {
return patient =await models.patient.findByPk(patientId);
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    try {
        
        let patient = models.Patient.build({
            name :name,
            surname:surname,
            dni:dni,
            hospitalId: hospitalId
        });

        
        return patient = await patient.save({fields: ["name", "surname", "dni", "hospitalId"]});
        

        
    } catch (error) {
       
    }
}

// Actualiza un paciente
exports.update = async function (patientId, name, surname, dni) {
    let patient = await models.Patient.findByPk(patientId);
    patient.name=name;
    patient.surname=surname;
    patient.dni=dni;
    try {
        await patient.save({fields: ["name", "surname", "dni"]});
        
    } catch (error) {
        
    }
    
}

// Borra un paciente
exports.delete = async function (patientId) {
    let pacienteBorrado= models.Pacient.findByPk(patientId);
    try{
    pacienteBorrado.destroy();
        console.log("paciente borrado con exito");
    }catch(error){}
    
};


// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
   let pacientesEnOrden= await models.Pacient.findAll({
    where:
    hospitalId=hospitalId
   });
   return pacientesEnOrden;
}
