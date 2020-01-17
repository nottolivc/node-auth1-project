const express = require('express');
const usersModel = require('../models/usersModel.js');
const router = express.Router({
    mergeParams: true
})

router.get('/', async(req,res,next)=>{
    try{
        res.json(await usersModel.getUsers())
    }
    catch(err){
        next(err)
    }
})

module.exports = router