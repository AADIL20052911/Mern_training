const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const taskSchema=new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:'pending',
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
});

module.exports=mongoose.model('Task',taskSchema);