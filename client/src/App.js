import { Box } from '@mui/material';
// Components
import Header from './components/Header/Header';
import Home from './components/home/Home';
import DataProvider from './context/dataProvider';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:54}}>
        <Home/>
      </Box>
    </DataProvider>
  );
}
 
export default App;
