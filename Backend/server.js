require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
//const axios = require('axios');

const PORT = process.env.PORT || 3000;

const connectDB = require('./db');

// Connect to MongoDB
connectDB();



const app = express();
app.use(bodyParser.json());



app.get('/', (req,res)=>{
    res.send(`Hello World from Vscode at ${new Date()}`);
});

//ROutes 
//import routes
const ReportIncident = require('./routes/reportIncident');
app.use('/api/incidents', ReportIncident);
//Auth Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, ()=>{
    console.log('Server is running on PORT 3000');
});
