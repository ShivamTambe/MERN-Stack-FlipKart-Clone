import User from "../model/user-schema.js";
export const userSignup=async(req,res)=>{
    try{
        console.log("UserName ",req.body.username);
        const exist = await User.findOne({username:req.body.username});
        if(exist){
            return res.status(401).json({message:"Username Already Exists"});
        }
        const user = req.body;
        console.log(user);
        const newUser=new User(user);
        await newUser.save();

        res.status(200).json({message:user})
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const userLogin=async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.findOne({username:username, password:password});
        console.log(username);
        console.log(user);

        if(user){
            return res.status(200).json({data:user})
        }
        return res.status(401).json({messgae:'Invalid Login'})
    }catch(error){
        res.status(500).json("Login Error ", error.message);
    }
}