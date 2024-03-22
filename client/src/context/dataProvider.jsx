import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider=({children})=>{
    const [account,setAccount]=useState('');
    const [totalPrice,setTotalPrice]=useState(0);
    return(
        <DataContext.Provider value={{
            account,
            totalPrice,
            setAccount,
            setTotalPrice
        }}>
            { children}
        </DataContext.Provider>
    )
}

export default DataProvider;