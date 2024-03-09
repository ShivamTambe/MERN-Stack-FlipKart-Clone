import styled from "@emotion/styled";
import { InputBase, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`
const InputSearchHome = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`
 
const SearchIconWraper=styled(Box)`
    padding:5px;
    color:blue;
    display:flex;
`
const Search=()=>{
    return (
        <SearchContainer>
            <InputSearchHome
                placeholder="Search For Producs,Brands and More"
            />
            <SearchIconWraper>
                <SearchIcon/>
            </SearchIconWraper>
        </SearchContainer>
    )
}

export default Search;

