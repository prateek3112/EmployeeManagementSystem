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

app.use(cors({origin: 'https://60aa5d04e9a4ee70c970a185--awesome-brattain-f1e7c2.netlify.app'}));

app.listen(3000,()=>{console.log('Magic is happening at port 3000')});

app.use('/employees',routes);