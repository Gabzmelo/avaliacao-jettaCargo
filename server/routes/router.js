const express = require('express');
const route = express.Router()

const services = require('../services/render')
const controller = require('../controllers/controller')

/**
 * @description Root Route
 * @method GET /
 */

route.get('/',services.homeRoutes);

/**
 * @description add caixas
 * @method GET /add-caixa
 */

route.get('/add-caixa', services.add_caixa)

/**
 * @description para atualizar caixa
 * @method GET /update-caixa
 */

route.get('/update-caixa', services.update_caixa)


route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route