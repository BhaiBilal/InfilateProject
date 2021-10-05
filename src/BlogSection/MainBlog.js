import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import BlogHead from './BlogHead'
import BlogHeader from "./Blogheader"
import {DataProvider} from "./DataProvider"

function MainBlog() {
    return (
       <>
         <BlogHeader />                             
       </>
    )
}

export default MainBlog
