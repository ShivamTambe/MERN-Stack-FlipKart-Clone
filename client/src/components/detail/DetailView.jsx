import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid, styled } from "@mui/material";


import ActionItem from "./ActionItem";

//components
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left:25px;
    & > p {
        margin-top: 10px;
    }
`;
const DetailView =()=>{
    
    const {id}=useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.getProductDetails);
    // let loading = productDetails ? productDetails.loading : false;
    let product = productDetails ? productDetails.product : null;
    console.log(product);
    useEffect(()=>{
        // if(productDetails.product && id !== productDetails.product.id)
            dispatch(getProductDetails(id));
    },[dispatch,id]);

    
    return(
        <Component>
            {
                product && Object.keys.length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} price={product.price.cost}/>
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product}/>
                        </RightContainer>
                    </Container>
            }
        </Component>
    )
}

export default DetailView;