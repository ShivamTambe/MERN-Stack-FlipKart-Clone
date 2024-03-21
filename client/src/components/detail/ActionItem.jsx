import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch,  } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

// import { payUsingPaytm } from "../../service/api";
// import { post } from "../utils/paytm";
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});
const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadiux: '2px',
    height: '50px',
    color: '#FFF',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}))
    
const ActionItem =({product})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ quantity ] = useState(1);
    const {id} = product;
    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    // const buyNow=async()=>{
    //     let response = await payUsingPaytm({amount:500, email:'shivamstambe20222@gmail.com'});
    //     console.log(response);
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    const amount = 5000000;
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
        <LeftContainer>
            <Image src={product.detailUrl} alt="" />
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add To Cart</StyledButton>
            <StyledButton variant="contained" onClick={(e)=>buyNow(e)} style={{background: '#fb641b'}}><FlashOnIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}
export default ActionItem;