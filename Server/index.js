const express = require('express');
const connection = require('./Config/db.js');
const cors = require('cors');

const app = express();
app.use(cors());



app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
})