const express = require('express');
const connection = require('./Config/db.js');
const cors = require('cors');
const userController = require('./Routes/user.Routes.js')

const app = express();

app.use(express.json());
app.use(cors());


app.use('/user', userController);

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
})