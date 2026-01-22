const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const user=require('../models/user.model');

exports.register=async(req,res)=>{
    
    const {name,email,password}=req.body;
    const exituser=await user.findOne({email});
    if(exituser){
        return res.status(400).json({message:'User already exists'});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new user({
        name,email,password:hashedPassword
    });
    await newUser.save();
    res.status(201).json({message:'User registered successfully',user:newUser});
};

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const existingUser=await user.findOne({email}).select('+password');
    if(!existingUser){
        return res.status(400).json({message:'Invalid email or password'});
    }   
    const isPasswordValid=await bcrypt.compare(password,existingUser.password);
    if(!isPasswordValid){
        return res.status(400).json({message:'Invalid email or password'});
    }
    const jwtSecret=process.env.JWT_SECRET;
    const token=jwt.sign({userId:existingUser._id},jwtSecret,{expiresIn:'1d'});
    res.status(200).json({message:'Login successfull',user:existingUser,token});
};
