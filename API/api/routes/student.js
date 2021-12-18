const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');

// get data form database
router.get('/',(req,res,next)=>{
    Student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})  

//getdataby id from database 

router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
    console.log(err);
        res.status(500).json({
            error:err
         })
    })
})

// post data into database
router.post('/',(req,res,next)=>{
    const student = new Student({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone
    })
    student.save()
    .then(result=>{
        console.log('result');
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err   
        })
    })

})


// Delete 
router.delete('/:id',(req,res,next)=>{
    Student.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'Student delete',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// put request or update the data form the database
router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
        // _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_product:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


module.exports=router;