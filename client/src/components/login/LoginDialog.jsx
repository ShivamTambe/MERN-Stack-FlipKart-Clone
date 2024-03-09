import { useState } from 'react';
import {Box, Button, Dialog, TextField, Typography, styled} from '@mui/material';

const Component = styled(Box)`
    height:70vh;
    width:90vh; //vh for View Port
`

const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:40%;
    padding:45px 35px;
    & > p{
        color:#FFFFFF;
        font-weight:600;
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding: 25px 45px;
    flex:1;
    &>div, & > button, & > p{
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    color:#FFF;
    background:#FB641B;
    height:48px;
    border-radius:2px;
`

const RequestOTP = styled(Button)`
    text-transform:none;
    color:#2874f0;
    background:#FFF;
    height:48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount=styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`

const accountInitialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Looks like youre new here!',
        subHeading:'Sign up with your mobile number to get started'
    }
}
const LoginDialog = ({open,setOpen}) =>{
    const [account,toggleAccount]=useState(accountInitialValue.login);
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    }
    const toggleSignup=()=>{
        toggleAccount(accountInitialValue.signup)
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:'flex', height:'100%'}}>
                    <Image>
                        <Typography varient="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Image>
                    { 
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField varient='standard'label="Enter Email/Enter Mobile Number"/>
                            <TextField varient='standard'label="Enter Password"/>
                            <Text>By continuing , you agree to Flipkart's Term of Use and Privacy Polociy</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={()=>toggleSignup()}>New to FlipKart? Create an account.</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField varient='standard'label="Enter FirstName"/>
                            <TextField varient='standard'label="Enter LastName"/>
                            <TextField varient='standard'label="Enter UserName"/>
                            <TextField varient='standard'label="Enter Email"/>
                            <TextField varient='standard'label="Enter Password"/>
                            <TextField varient='standard'label="Enter Phone"/>
                            <LoginButton>Continue</LoginButton>

                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;