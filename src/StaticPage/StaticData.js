import React, { useState, useEffect, createContext } from 'react'
import Axios from "axios"

export const DataContext = createContext();

export const StaticData = (props) => {
    
    const [data, setData] = useState([]);
   
       useEffect(async () => {
    const result = await Axios(
        'http://netdemo.site/infilate/public/api/apps/content', {
          method:"POST"
      }
        );
        let run=result.data.Data
        

    
       
        for (var i = 0; i < run.length; i++){
            console.log(run[i].id);

            let id= run
            
        
            for (var k = 0; k < id.length;k++)
            if (run[i].id == `${query}`) {
                var items = run[i];
                
            }
            setData(items)
           
        }
       

        for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section1") {
                var section1 = items.content[j];
                
            }
            
           
        }
        for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section2") {
                var section2 = items.content[j];
           }
        }
         for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section3") {
                var section3 = items.content[j];
           }
        }
        for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section4") {
                var section4 = items.content[j];
           }
        }
        for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section5") {
                var section5 = items.content[j];
           }
        }
         for (var j = 0; j < items.content.length; j++){
            console.log(items.content[j].section);
            if (items.content[j].section == "Section7") {
                var section7 = items.content[j].content;
             
                console.log(section7)
           }
            }
        setSection1(section1);
        setSection2(section2)
        setSection3(section3)
        setSection4(section4)
        setSection5(section5)
        setSection7(section7)

      
        
    }, []);

     value = {
         data: [data, setData],
    section1: [section1, setSection1],
    section2: [section2, setSection2],
    section3: [section3, setSection3],
    section4: [section4, setSection4] ,
    section5: [section5, setSection5] ,
    section7: [section7, setSection7] ,
    }
console.log(data)
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

