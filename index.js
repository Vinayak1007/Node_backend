const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res)  =>{
    res.send('Welcome to the world of Backend ');
});

app.get('/about',(req,res)  => {
    res.send('Why do you want to know about me (BOLO BOLO KYA BAAAT HAIII ............)');
});

app.get('/contact',(req, res)  => {
    res.send('Contact me at :-  Nhi batayenge hum ');
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});