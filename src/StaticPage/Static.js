import React,{useState,useEffect} from 'react'

import Static2 from "./Static2"
import Axios from "axios"
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Static1 from './Static1'

 

    function Static(props) {
    
    
  
    
    return (
        <>
            <Router>
           <Switch>
                     <Route exact path="/Static" component={Static1} />
                     <Route  path="/Static/:id" component={Static2} />
                    
                 
               
                  
           </Switch>
       </Router>
            </>
    )
}

export default Static
