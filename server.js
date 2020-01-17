const express = require('express');

const registerRouter = require('./routers/registerRouter.js');
const loginRouter = require('./routers/loginRouter.js');
const usersRouter = require('./routers/usersRouter.js');


const server = express();


server.use(express.json());
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);


server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'Error starting server....'})
})



module.exports = server; 