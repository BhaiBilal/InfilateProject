import React,{useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import './style.css'

function TodAnimation() {

    window.addEventListener('scroll',()=>{
        const Lr=document.getElementById("myDiv")
        console.log(window.pageYOffset)
        if(window.pageYOffset==0){
            Lr.classList.remove("letsdothis3")
            Lr.classList.remove("letsdothis5")
            Lr.classList.add("letsdothis4")

        }

        if(window.pageYOffset>150 && window.pageYOffset<250){
            Lr.classList.remove("letsdothis4")
            Lr.classList.remove("letsdothis3")
            Lr.classList.add("letsdothis5")

        }


        if(window.pageYOffset>250){
            Lr.classList.remove("letsdothis4")
            Lr.classList.remove("letsdothis5")
            Lr.classList.add("letsdothis3")
        }

        // if(window.pageYOffset==100){
        //     Lr.classList.toggle("letsdothis4")
        // }

    })

    const handleclick=()=>{
        const Lr=document.getElementById("myDiv")
        Lr.classList.toggle("letsdothis3")
    }

    return ( 
        
            <div style={{paddingTop:"140px"}}>
            <div className="letsdothis">
                <div id="myDiv" className="letsdothis2">            
                    </div>
                <button type='button' onClick={handleclick}>clikc</button>
                </div>
            </div>
   
    )
}

export default TodAnimation
