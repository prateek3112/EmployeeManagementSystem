const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employeeDb",(err)=>{
    if(!err){
        console.log('Magic is happening');
    }
    else{
    console.log('I think there is some problem!')
    }
});

module.exports = mongoose;