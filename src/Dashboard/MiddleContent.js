import React from 'react'
import AddWebinars from './Contents/AddWebinar'
import AddCoupons from './Contents/AddCoupons'
import Addblog from './Contents/Addblog'
import Home from './Contents/Home'
import AddProduct from './Contents/AddProducts'
import AddService from './Contents/AddServices'

function MiddleContent({selected}) {

    


    const conditionRender = () => {

        if(selected=='AddBlog') {
            return (
                <Addblog />
            )
        }

        else if(selected=='Upload Coupons'){

            return (
                <AddCoupons />
                )
        }

        else if(selected=='AddWebinar'){

            return (
                <AddWebinars />
            )
        }

        else if(selected == 'Home') {

            return (

                <Home />
            )
        }

        else if(selected == 'AddProducts') {

            return (

                <AddProduct />
            )
        }


        else if(selected == 'AddServices') {

            return (

                <AddService />
            )
        }

    }

    return (
        <div>

        {conditionRender()}
            
        </div>
    )
}

export default MiddleContent
