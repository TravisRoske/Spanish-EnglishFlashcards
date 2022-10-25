'use strict';

import express from 'express'
const app = express();
app.use(express.static('public'));// to connect with frontend html
app.use(express.json());//body parse

app.get('/', function(req,res){
  	res.sendFile('index.html');
});

app.listen(3000, () =>{
    console.log("http://localhost:3000")
});