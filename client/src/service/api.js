import axios from 'axios';

const URL="http://localhost:8000";
export const authenticateSignup=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)    //.then can be use But Latest features of ES6 is used so Uesd await
    }catch(error){
        console.log("Error while Signup api",error.message);
    }
}

export const authenticateLogin=async(data)=>{
    try{
        return await axios.post(`${URL}/login`,data);    //.then can be use But Latest features of ES6 is used so Uesd await
    }catch(error){
        console.log("Error while Signup api",error.message);
        return error.response;
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling api id: ', error);
    }
}