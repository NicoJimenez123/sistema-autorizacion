const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
  usuario_nombre: {type: String, required: true},
  password: {type: String, required: true},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

usuarioSchema.pre('save', function (next) {
  let now = Date.now()
   
  this.fechaModificacion = now
  // Set a value for createdAt only if it is null
  if (!this.fechaCreacion) {
    this.fechaCreacion = now
    this.fechaEliminado = null
  }
  
  // Call the next function in the pre-save chain
  next()    
})

module.exports = mongoose.model('Usuario', usuarioSchema)