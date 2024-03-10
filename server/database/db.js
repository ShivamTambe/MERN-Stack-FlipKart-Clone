import mongoose from 'mongoose';


export const Connection=async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.cuic2kf.mongodb.net/E-Commerece?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL);
        console.log("Database connected Successfully");
    }catch(error){
        console.log("Error While Connecting database", error.message)
    }
}