import { Box, Typography,styled } from "@mui/material";

import { useState,useEffect, useContext } from "react";
import { DataContext } from "../../context/dataProvider";

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
    }
`;
const Price = styled(Typography)`
    float: right;
`;
const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`
const TotalView =(cartItems)=>{
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    const {setTotalPrice}= useContext(DataContext);
    console.log(cartItems);
    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        if(cartItems){
            cartItems.cartItems.map(item => {
                price += item.price.mrp
                discount += (item.price.mrp - item.price.cost) 
            })
        }
        setPrice(price);
        setTotalPrice(price - discount + 40);
        setDiscount(discount);
    }
    return(
        <Box>
            <Header>
                <Heading>PRICE DETAIL</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length}item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">40rs</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price>₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;