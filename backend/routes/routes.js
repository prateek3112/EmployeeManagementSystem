const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');
const objectId = require('mongoose').Types.ObjectId;

router.post('/',(req,res)=>{
    let emp = new Employee({
        name : req.body.name,
    position : req.body.position,
    dept : req.body.dept
    });
    emp.save((err,doc)=>{
        if(err){
            res.json('Error Finding Employees' ,err);
        }
        else {
            res.send(doc);
        }
    });
});

router.get('/', (req, res)=>{
    Employee.find((err,doc)=>{
        if(err){
            res.json('Error Creating Employee' ,err);
        }
        else {
            res.send(doc);
        }
    });
});

router.get('/:id', (req, res)=>{


    if(objectId.isValid(req.params.id)){
        
        Employee.findById(req.params.id, (err, doc)=>{
            if(err){
                res.json('Error Finding Employees' ,err);
            }
            else {
                res.send(doc);
            }
        });
    }
    else{
        return res.status(400).send("Record not found " + req.params.id);
    }
    
});


router.delete('/:id', (req, res)=>{


    if(objectId.isValid(req.params.id)){
        
        Employee.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(err){
                res.json('Error Deleting Employees' ,err);
            }
            else {
                res.send(doc);
            }
        });
    }
    else{
        return res.status(400).send("Record not found " + req.params.id);
    }
    
});


router.put('/:id', (req, res)=>{

    let emp = {
        name : req.body.name,
    position : req.body.position,
    dept : req.body.dept
    };
    if(objectId.isValid(req.params.id)){
        
        Employee.findByIdAndUpdate(req.params.id, {$set : emp},{ new : true} ,(err, doc)=>{
            if(err){
                res.json('Error Deleting Employees' ,err);
            }
            else {
                res.send(doc);
            }
        });
    }
    else{
        return res.status(400).send("Record not found " + req.params.id);
    }
    
});

module.exports = router;