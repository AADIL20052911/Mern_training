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

exports.getTask=async(req,res)=>{
    try{
    const tasks=await task.find();
    res.status(200).json({tasks});
} catch(err){   
    res.status(500).json({message:'Internal Server Error'});
}
};

exports.updateTask=async(req,res)=>{
    try{
    const {id}=req.params;
    const {title,description,status}=req.body;
    const updatedTask=await task.findByIdAndUpdate(id,{title,description,status},{new:true});
    res.status(200).json({message:'Task updated successfully',task:updatedTask});

} catch(err){
    res.status(500).json({message:'Internal Server Error',error:err.message});
}
};
exports.deleteTask=async(req,res)=>{
    try{
    const {id}=req.params;
    await task.findByIdAndDelete(id);
    res.status(200).json({message:'Task deleted successfully'});    
} catch(err){
    res.status(500).json({message:'Internal Server Error'});
}
};
