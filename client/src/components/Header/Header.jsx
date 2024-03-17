
import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
// Components
import Search from "./Search";
import CustomButton from "./CustomButton";

const StyleAppBar= styled(AppBar)`
    background:#2674f0;
    height:55px;
`

const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:inherit;
`

const SubHeading = styled(Typography)`
    font-style:Italic;
    font-size:10px;
`

const PlusImage = styled('img')({
    width: 10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)`
    margin: 0 5% 0 auto;
`
 
const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div className="Header">
            <StyleAppBar>
                <Toolbar style={{minHeight:55}}>
                    <Component to="">
                        <img src={logoURL} alt="Logo" style={{width:75}}/>
                        <Box style={{display:'flex'}}>
                            <SubHeading>Explorer&nbsp; <Box component="span" style={{color:'#FFE500'}}>Plus</Box></SubHeading>
                            <PlusImage src={subURL} alt="" />
                        </Box>
                    </Component>
                    <Search/>
                    <CustomButtonWrapper>
                        <CustomButton/>
                    </CustomButtonWrapper>
                </Toolbar>
            </StyleAppBar>
        </div>
    )
}
export default Header;