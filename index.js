require('dotenv').config();
const express = require('express');
const app = express();
const port =1234;
const db = require('./config/mongoose');

const passport = require("passport");
const passportJWT =require ("./config/passport-jwt-strategy");


app.use(express.urlencoded());
app.use(express.json());
app.use(passport.initialize());
const bodyparser = require('body-parser');



app.get('/',(req,res)=>{
    res.send("Home Page");
    app.use('/',require('./routes'));
});
app.listen(port, function(err){
    if(err){
        console.log("Error while Server Starting--");
        return;
    }
    else{
    console.log("Server is up and Running on Port..",port);
    }

});
