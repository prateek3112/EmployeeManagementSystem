const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const mongoose = require('./db');
const Employee = require('./models/employee');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000,()=>{console.log('Magic is happening at port 3000')});

app.use('/employees',routes);