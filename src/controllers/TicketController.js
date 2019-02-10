const Ticket = require('../models/Ticket');


module.exports = {
    async index(req,res){
        const tickets = await Ticket.find({}).sort("createdAt");
        return res.json(tickets);
    },
    async set(req,res){
        const ticket = await Ticket.create(req.body);
        req.io.emit('ticket',ticket);
        return res.json(ticket);
    },
    async delete(req,res){
        const ticket = await Ticket.findByIdAndRemove(req.params.id);
        const response = {
            message: "Ticket successfully deleted",
            id: ticket._id
        };
        req.io.emit('ticketDeleted',response);
        return res.status(200).send(response);
    }
};