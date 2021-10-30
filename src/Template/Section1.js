import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import "./Section1.css";

const Section1 = (props) => {
    const [content, setContent] = React.useState([])

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'http://infilate.com/backend/public/api/app/footer/page-content',
            data:{
                id:props.match.params.pageId
            },
     
          }).then(res => {
            setContent(res.data.Data)
    
          }).catch(e => {
            console.log(e)
          })
        // console.log(props.match.params.pageId)
    }, [])

    console.log(content[0])
    return (
        <div className = "static-section1">
            <div className = "static-section1-banner">
            <img src={`http://infilate.com/backend/public${content && content[0] && content[0].banner_image}`} />
            </div>
            <div className = "static-section1-header">
                <div className = "static-section1-header-img">
                <img src={`http://infilate.com/backend/public${content && content[0] && content[0].logo}`} />
                </div>
                <div className = "static-section1-header-title">
                    <h1> { content[0] && content[0].heading } </h1>
                </div>
            </div>
            <div className = "static-section1-desc">
            <div dangerouslySetInnerHTML={{__html: `${content[0] && content[0].description }`}} />
                
            </div>
        </div>
    )
}

export default (withRouter(Section1))
