
import { Box, Typography,Button, styled } from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartActions";
import { UseDispatch, useDispatch } from "react-redux";
import { addEllipsis } from "../utils/common-utils";
import GroupButton from "./GroupButton";
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background:#fff;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;
const CartItems=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const removeItemFromCart=(id)=>{
        dispatchEvent(removeFromCart(id));
    }
    return(
        <Component>
            <LeftComponent>
                <img src={item.url} alt="" />
                <GroupButton/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller Retail:rate
                    <Box component="span"><img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }}/></Box>
                </SmallText>
                <Typography>
                    Some thesxt goes here
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItems;