import { useEffect  } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid, Typography, styled } from "@mui/material";


import ActionItem from "./ActionItem";


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
    & > p {
        margin-top: 10px;
    }
`;
const DetailView =()=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const {id}=useParams();
    const dispatch = useDispatch();
    
    const productDetails = useSelector(state => state.getProductDetails);
    let loading = productDetails ? productDetails.loading : false;
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
                            <ActionItem product={product} />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <Typography>
                                {product.title.longTitle}
                            </Typography>
                            <Typography style={{marginTop: 5,color:"#878787", fontSize:14}}>
                                8 Rating & 1 Review
                                <Box component="span">
                                    <img src={fassured} alt="" style={{width:77,marginLeft:20}} />
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span"  style={{ color: '#388E3C' }}>{product.price.discount}</Box>
                            </Typography>
                        </RightContainer>
                    </Container>
            }
        </Component>
    )
}

export default DetailView;