
import { products } from "./constant/data.js"
import Product from "./model/product-schema.js";
const DefaultData = async() =>{
    try{
        await Product.insertMany(products);
        console.log("Data Imported SUccessfully");
    }catch(error){
        console.log("Error while Retriving Product Data ", error.message );
    }
}

export default DefaultData;