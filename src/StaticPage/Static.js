import React,{useState,useEffect} from 'react'

import Static1 from "./Static1"
import Axios from "axios"
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Section1 from 'Template/Section1'

 

    function Static(props) {
    
    
  
    
    return (
        <>
            <Router>
           <Switch>
                     <Route exact path="/Static" component={Static1} />
                     <Route exact path="/Static/:pageId" component={Section1} />
                    
                 
               
                  
           </Switch>
       </Router>
            </>
    )
}

export default Static
