const express = require('express')
const routes = express.Router()

const users = require("../app/controllers/users")

const validator = require("../app/validators/users")
const { adminOnly } = require("../app/middlewares/session")

routes.get('/', adminOnly, validator.index, users.index)
routes.get('/register', adminOnly, users.registerForm)
routes.get('/edit/:id', adminOnly, validator.show, users.show)

routes.post('/', adminOnly, validator.post, users.post)
routes.put('/', adminOnly, validator.put, users.put)
routes.delete('/', adminOnly, validator.userDelete, users.delete)

module.exports = routes