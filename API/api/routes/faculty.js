const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'This is faculty get request'
    })
})
router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'This is the faculty post request'
    })
})

module.exports=router;