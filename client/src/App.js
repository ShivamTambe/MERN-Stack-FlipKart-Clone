import { Box } from '@mui/material';
// Components
import Header from './components/Header/Header';
import Home from './components/home/Home';
import DataProvider from './context/dataProvider';
import DetailView from './components/detail/DetailView';
import Cart from './components/cart/Cart';
import PaymentFailed from './components/PaymentFailed/PaymentFailed';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:54}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailView/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/failure' element={<PaymentFailed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}
 
export default App;
