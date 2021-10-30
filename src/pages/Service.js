import React from 'react'
import "./Service.css"
import Container from 'react-bootstrap/Container'
import axios from 'axios'




function Service() {


    const [list,setList] = React.useState([])
    const [customizedList,setCustomizedList] = React.useState([{}])
    
    React.useEffect(() => {
   
        axios({
          method: 'POST',
          url: 'http://infilate.com/backend/public/api/app/services/service-list',
          data:{
              category_ids:`[]`
          },
   
        }).then(res => {
          setList(res.data.Data)
  
        }).catch(e => {
          console.log(e)
        })
   
      }, [])

  
 
    return (
        <div style = {{backgroundColor : "#f2f2f2"}}>
            <div className = "services" >
                <h1 >Our Services</h1>
                <div className = "services-section">
                <ul className="service-container">

                    {list && list.length > 0?
                    list.map((item, index) => {
                        if(index < 4) {
                            return (
                                <li>
                                    <h3>{item.name}</h3>
                                    <ul>
                                    {item.category ?
                                    item.category.map((v, j) => {
                                        return(
                                            <li><span>{v.name}</span></li>
                                        )
                                    })
                                    :
                                    <></>
                                    }
                                    </ul>
                                </li>
                            )
                        }
                    })

                    :
                    <></>
                    }
                </ul>
                <ul className="service-container">

                    {list && list.length > 4?
                    list.map((item, index) => {
                        if(index >= 4 && index <= 7) {
                            return (
                                <li>
                                    <h3>{item.name}</h3>
                                    <ul>
                                    {item.category ?
                                    item.category.map((v, j) => {
                                        return(
                                            <li><span>{v.name}</span></li>
                                        )
                                    })
                                    :
                                    <></>
                                    }
                                    </ul>
                                </li>
                            )
                        }
                    })

                    :
                    <></>
                    }
                </ul>
                <ul className="service-container">

                    {list && list.length > 8?
                    list.map((item, index) => {
                        if(index >= 8 && index <= 11) {
                            return (
                                <li>
                                    <h3>{item.name}</h3>
                                    <ul>
                                    {item.category ?
                                    item.category.map((v, j) => {
                                        return(
                                            <li><span>{v.name}</span></li>
                                        )
                                    })
                                    :
                                    <></>
                                    }
                                    </ul>
                                </li>
                            )
                        }
                    })

                    :
                    <></>
                    }
                </ul>
                <ul className="service-container">

                    {list && list.length > 12?
                    list.map((item, index) => {
                        if(index >= 12 && index <= 15) {
                            return (
                                <li>
                                    <h3>{item.name}</h3>
                                    <ul>
                                    {item.category ?
                                    item.category.map((v, j) => {
                                        return(
                                            <li><span>{v.name}</span></li>
                                        )
                                    })
                                    :
                                    <></>
                                    }
                                    </ul>
                                </li>
                            )
                        }
                    })

                    :
                    <></>
                    }
                </ul>
                </div>

            </div>
        </div>
    )
}

export default Service
