import axios from "axios";
import * as actionTypes from '../constants/productConstant';

const URL="http://localhost:8000";
// Used THunk as MiddleWare ()=> Before async MiddleWare  async (). Dispatch calls reducers function
export const getProducts = ()=> async (dispatch)=>{
    try{
        const {data}= await axios.get(`${URL}/products`)
        // which type failed, old to diff in productReducer
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        console.log("Error while calling GEtProducts Action Redux Server ", error.message);
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL,payload:error.message})

    }
}

export const getProductDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        console.log("HIII");
        const {data}= await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data});
    }catch(error){
        console.log("Error while calling GEtProductsDetails Action Redux Server ", error.message);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}
// Destructing the Obj Best Practise
// const obj={
//     config:{},
//     data:[],
//     message:''
// }

// (data)=obj;