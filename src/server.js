const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


var config = require('./config/config')();


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
mongoose.connect(config.dbURL,
{
    useNewUrlParser:true
});
app.use(cors());
app.use((req,res,next)=> {
    req.io = io;
    return next();
});
app.use(express.json());
app.use(require('./routes'));

server.listen(config.serverPort,()=>{
    console.log(`Server starting on port ${config.serverPort}`);
});