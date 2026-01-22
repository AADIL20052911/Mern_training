const express=require('express');   
const routes=express.Router();
const {createTask,getTask,updateTask,deleteTask}=require('../controllers/taskcontroller');
const{protect}=require('../middleware/authmiddle');

routes.post('/create',protect,createTask);
routes.get('/gettask/:id',protect,getTask);
routes.put('/updatetask/:id',protect,updateTask);
routes.delete('/deletetask/:id',protect,deleteTask);

module.exports=routes;