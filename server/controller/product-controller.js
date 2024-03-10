
import Product from "../model/product-schema.js";
export const getProducts=async(req,res)=>{
    try{
        const Products = await Product.find({})
        res.status(200).json(Products)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}