const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema({
  rol_id: {type: Number, required: false},
  rol_nombre: {type: String, required: true},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

module.exports = mongoose.model('Roles', rolesSchema)