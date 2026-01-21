const task=require('../models/task');

exports.createTask=async(req,res)=>{
    try{
    const {title,description,status}=req.body;
    const newTask=new task({
        title,description,status    
    });
    await newTask.save();
    res.status(201).json({message:'Task created successfully',task:newTask});
} catch(err){
    res.status(500).json({message:'Internal Server Error'});
}
};

