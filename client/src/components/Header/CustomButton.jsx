import { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

import { DataContext } from "../../context/dataProvider";
//components
import Profile from "./Profile";

import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 16,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'block',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform : none;
    padding: 5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`
 
const CustomButton =()=>{

    const [ open,setOpen] = useState(false);

    const {account, setAccount}= useContext(DataContext);
    const openDialog=()=>{
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account?<Profile account={account} setAccount={setAccount}/>:
                    <LoginButton variant="Contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButton;