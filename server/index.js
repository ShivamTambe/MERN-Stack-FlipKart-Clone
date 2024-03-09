import express from 'express';

import { Connection } from './database/db.js';
import DefaultData from './default.js';
const app = express();


const PORT = 8000;

const USERNAME=process.env.DB_UserName;
const PASSWORD=process.env.DB_Password;
Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>{
    console.log(`server is running successfully on ${PORT}`)
})

DefaultData();