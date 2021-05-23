const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{

    name : {type: 'String' , required: true},
    position : {type: 'String' , required: true},
    dept : {type: 'String' , required: true}
});

module.exports = Employee;