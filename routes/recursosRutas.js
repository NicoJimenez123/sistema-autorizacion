const express = require('express')
const recursosRutas = express.Router()
const Recursos = require('../models/recursosModel')

recursosRutas.get('/', (req, res) => {
    Roles.find()
        .then(r => {
            res.status(200).json({
                mensaje: 'Listado de Roles',
                roles: r
            })
        })
        .catch(e => {
            res.status(500).json({
                mensaje: 'Error'
            })
        })
})

recursosRutas.post('/', (req, res) => {
    const rol = new Roles({
        rol_nombre: req.body.nombre
    })
    rol.save().then(r => {
            res.status(200).json({
                mensaje: 'Rol Creado',
                r
            })
        })
        .catch(e => res.status(400).json({
            mensaje: 'No se pudo crear el Rol',
            error: e
        }))
})

recursosRutas.delete('/:id', (req, res) => {
    Roles.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Roles Borrado'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
})

recursosRutas.put('/:id', (req, res) => {
    let roles = Roles.findOne({_id: req.params.id})
    if(roles) {
        Roles.updateOne({_id: req.params.id}, {rol_nombre: req.body.nombre}).then(
            roles => {
                if(roles) {
                    res.json({
                        mensaje: 'Roles Modificado con Éxito',
                        roles
                    })
                } else {
                    res.status(400).json({
                        mensaje: 'No se pudo modificar la información del rol'
                    })
                }
            }
        ) 
    } else {
        res.send(404).json({
            mensaje: 'No se encontró ningún rol'
        })
    }
})

module.exports = recursosRutas