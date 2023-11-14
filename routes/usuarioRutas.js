const express = require('express')
const usuarioRutas = express.Router()
const Usuario = require('../models/usuarioModel')
const bcrypt = require('bcrypt')
const auth = require('../middlewares/auth')
const jwt = require('jsonwebtoken')

usuarioRutas.post('/login', (req, res) => {
    Usuario.findOne({ usuario_nombre: req.body.username }).then(
        (usuario) => {
          if (!usuario) {
            return res.status(401).json({
              error: new Error('Usuario no encontrado!')
            });
          }
        bcrypt.compare(req.body.password, usuario.password).then(
        (valid) => {
            if (!valid) {
            return res.status(401).json({
                error: new Error('Password incorrecto!')
            });
            }
        const token = jwt.sign(
            { tknUserId: usuario._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
            res.status(200).json({
                tknUserId: usuario._id,
                token: token
              });
            }           
          ).catch(
            (error) => {
              res.status(500).json({
              error: error
              });
            }
          );
      }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
})

usuarioRutas.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new Usuario({
                usuario_nombre: req.body.username,
                password: hash
            });
            user.save().then(
            () => {
                res.status(201).json({
                message: 'Usuario Creado'
                });
            }
            ).catch(
            (error) => {
                res.status(500).json({
                error: error
                });
            }
            );
        }
        );
})

usuarioRutas.get('/', auth, (req, res) => {
    Usuario.find().then(
        (usuarios) => {
            res.status(200).json(usuarios);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
})

usuarioRutas.delete('/:id', auth, (req, res) => {
    Usuario.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Usuario Borrado'
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

usuarioRutas.put('/:id', auth, (req, res) => {
    let usuario = Usuario.findOne({_id: req.params.id})
    if(usuario) {
        Usuario.updateOne({_id: req.params.id}, {usuario_nombre: req.body.username}).then(
            usuario => {
                if(usuario) {
                    res.json({
                        mensaje: 'Usuario Modificado con Éxito',
                        usuario: usuario
                    })
                } else {
                    res.status(400).json({
                        mensaje: 'No se pudo modificar la informacióin del usuario'
                    })
                }
            }
        ) 
    } else {
        res.status(404).json({
            mensaje: 'No se encontró ningún usuario'
        })
    }
})



module.exports = usuarioRutas