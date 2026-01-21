const express=require('express');   
const routes=express.Router();
const {createTask}=require('../controllers/taskcontroller');
routes.post('/task',createTask);
module.exports=routes;