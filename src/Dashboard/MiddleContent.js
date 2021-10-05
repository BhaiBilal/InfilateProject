import React from 'react'
import AddWebinars from './Contents/AddWebinar'
import AddCoupons from './Contents/AddCoupons'
import Addblog from './Contents/Addblog'
import Home from './Contents/Home'

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

    }

    return (
        <div>

        {conditionRender()}
            
        </div>
    )
}

export default MiddleContent
