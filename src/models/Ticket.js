const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    subject : String,
    recipient:String,
    body:String,
    Status:String,
    Solution:String,
    createdAt: {
        type:Date,
        default:Date.now,
    },
});
module.exports = mongoose.model("Ticket",TicketSchema);