import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


// Component 

import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
    padding:10px;
    background-color: #F2F2F2;
`
const Home=()=>{
    //Here getProducst is from State of FrontEnd Database (Redux Table) values are stored from store.js
    const products = useSelector(state=>state.getProducts);
    // // Object destructuring Method IMP Interview questions
    // const { products }= getProduct;
    //getProducts.products
    // Dispatch getProducts before use
    console.log(products);
    // console.log(products.size());
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products.products} 
                    title="Deal of the Day"
                    timer={true}
                />
                <MidSection/>
                <Slide products={products.products} 
                    title="Deal of the Day"
                    timer={true}
                />
                <Slide products={products.products} 
                    title="Deal of the Day"
                    timer={true}
                />
            </Component>
        </>
    )
}
export default Home; 