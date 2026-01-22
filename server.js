const express=require('express');
const res = require('express/lib/response');
const port=5000;
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

app.get('/',(req,res)=>{
    try{
        res.status(200).send('Hello World!');
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
        
});

app.get('/reg',(req,res)=>{
    try{
        res.status(200).send('Registration Page');
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
});



app.use('/tasks',require('./routes/taskroutes'));
app.use('/auth',require('./routes/AuthRoutes'));

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
}); 

