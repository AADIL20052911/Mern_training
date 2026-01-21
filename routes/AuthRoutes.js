const express=require('express');
const routes=express.Router();

const {register,login}=require('../controllers/Authcontroller');
const {tasks}=require('../controllers/taskcontroller');
routes.post('/register',register);
routes.post('/login',login);
routes.post('/tasks',tasks);

module.exports=routes;