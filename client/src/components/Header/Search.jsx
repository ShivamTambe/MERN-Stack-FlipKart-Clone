
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { InputBase, Box, List, ListItem} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

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
const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const Search=()=>{
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false);
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const handleClick =()=>{
        setOpen(true);
        setText('');
    }
    return (
        <SearchContainer>
            <InputSearchBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              value={text}
              onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWraper>
                <SearchIcon/>
            </SearchIconWraper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => handleClick()} 
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;

