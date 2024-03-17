
import Product from "../model/product-schema.js";
export const getProducts=async(req,res)=>{
    try{
        const Products = await Product.find({})
        res.status(200).json(Products)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getProductById= async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const ProductOne = await Product.findOne({'id':id})
        console.log("Product: ",ProductOne);
        res.status(200).json(ProductOne);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}