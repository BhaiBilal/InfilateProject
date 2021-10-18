import React from 'react'
import "./Service.css"
import Container from 'react-bootstrap/Container'
import axios from 'axios'




function Service() {


    const [list,setList] = React.useState([])
    const [customizedList,setCustomizedList] = React.useState([{}])
    
    React.useEffect(() => {
        let cancel
        axios({
          method: 'POST',
          url: 'http://infilate.com/backend/public/api/app/services/service-list',
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setList(res.data.Data)
  
        }).catch(e => {
          if (axios.isCancel(e)) return
        })
        return () => cancel()
      }, [])


    //   console.log(list)
  
 
    return (
        <>
            <Container style={{ width: "100%", marginTop: "20px" }} >
                <h1 className="service-head" style={{ fontSize: "1.625rem", fontweight: "bold" }} >Research popular software & services</h1>
                <div className="service-container">



                    <div className="service-block">
                         {
                            list && list.slice(0,4).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        } 


                    </div>

                    <div className="service-block">



                    {
                            list && list.slice(4,8).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        }
                    </div>



                    <div className="service-block">


                    </div>



                    <div className="service-block">


                    </div>


                </div>


            </Container>
        </>
    )
}

export default Service
