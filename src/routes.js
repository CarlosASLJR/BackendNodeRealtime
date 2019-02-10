const express = require('express');
const routes = express.Router();
const TicketController = require('./controllers/TicketController'); 

routes.get('/tickets',TicketController.index);
routes.post('/tickets',TicketController.set);
routes.delete(`/ticket/:id`,TicketController.delete);

module.exports = routes;