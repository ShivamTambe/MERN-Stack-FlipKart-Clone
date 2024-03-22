import { useSelector } from "react-redux";
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
// componentns

import CartItems from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;
const Cart=()=>{
    const {cartItems} = useSelector(state => state.cart);
    const {totalPrice}= useContext(DataContext);
    const amount = totalPrice*100;
    const currency = "INR";
    const buyNow=async(e)=>{
        const  response = await fetch("http://localhost:8000/order",{
            method:"POST",
            body:JSON.stringify({
                amount,
                currency,
            }),
            headers:{
                "Content-Type":"application/json",
            },
        });
        const order = await response.json();
        console.log(order);


        var options = {
            key: process.env.RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name: "Acme Corp", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
              const body = {
                ...response,
              };
      
              const validateRes = await fetch(
                "http://localhost:8000/order/validate",
                {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const jsonRes = await validateRes.json();
              console.log(jsonRes);
              if(jsonRes.msg === "success"){
                window.location.href='/';
              }else{
                window.location.href='/failure';
              }
            },
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              name: "Dev", //your customer's name
              email: "Dev@example.com",
              contact: "9000000000", //Provide the customer's phone number for better conversion rates
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          var rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
          rzp1.open();
          e.preventDefault();
    }
    return (
        <>
        { 
            cartItems.length ?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12} >
                        <Header>
                            <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                        </Header>
                        {
                            
                            cartItems.map( item=>(
                                <CartItems item={item}/>
                            ))
                        }
                        <BottomWrapper>
                            <StyledButton onClick={(e)=>buyNow(e)}>Place Order</StyledButton>
                        </BottomWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
                : <EmptyCart/>
        }
        </>
    )
}

export default Cart;