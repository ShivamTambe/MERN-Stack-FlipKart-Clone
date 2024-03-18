import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

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
    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt="" />
            <StyledButton variant="contained" style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add To Cart</StyledButton>
            <StyledButton variant="contained" style={{background: '#fb641b'}}><FlashOnIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}
export default ActionItem;