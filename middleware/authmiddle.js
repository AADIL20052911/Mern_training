const jwt=require("jsonwebtoken");
 exports.protect=async(req,res,next)=>{
     let token;         
        if(req.headers.authorization ){
            try{
                token=req.headers.authorization.split(' ')[1];
                const jwtSecret=process.env.JWT_SECRET;
                const decoded=jwt.verify(token,jwtSecret);
                req.user=decoded.userId;
                next();
            }catch(err){
                res.status(401).json({message:'Not authorized,token failed'});
            }
        }
        if(!token){
            res.status(401).json({message:'Not authorized,no token'});
        }
    };
