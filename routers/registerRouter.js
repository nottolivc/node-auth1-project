const express = require('express');
const regModel = require('../models/registerModel.js');
const router = express.Router({
    mergeParams: true
})

router.post('/', async(req,res,next)=>{
    try{
        const payload = {
            username: req.body.username,
            password: req.body.password
        }

        await regModel.add(payload)
        res.status(200).json({message: 'User created!'})

    }
    catch(err)
    {
        next(err)
    }
})


module.exports = router;