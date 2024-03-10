import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const Component = styled(Box)`
    padding:10px;
    background-color: #F2F2F2;
`
const Home=()=>{
    //Here getProducst is from State of FrontEnd Database (Redux Table) values are stored from store.js
    const getProducts = useSelector(state=>state.getProducts);
    // Object destructuring Method IMP Interview questions
    const { products }= getProducts;
    //getProducts.products
    // Dispatch getProducts before use
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
            </Component>
        </>
    )
}
export default Home; 