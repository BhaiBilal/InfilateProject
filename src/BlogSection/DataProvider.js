import React, { useState, useEffect, createContext } from 'react'
import Axios from "axios"

export const DataContext = createContext();

export const DataProvider = (props) => {
    
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
     const [data2, setData2] = useState([]);
    useEffect(async () => {
        
        const result=await Axios(
            ' http://netdemo.site/infilate/public/api/app/blog', {
            method: "POST"
        }
        );
        const res = result.data.Data
        // console.log(result);
        setData(res)
        setData1(res)
         setData2(res)
        
    

    }, [])
    

    return (
        <DataContext.Provider value={[data, setData],[data1, setData1],[data2, setData2]}>
            {props.children}
        </DataContext.Provider>
    )
}

