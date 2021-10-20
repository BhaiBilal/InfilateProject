import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import "./Brand.css";
import home from "../images/home.mp4"





function Brand(props) {

    const [organizationDetails, setOrganizationDetails] = useState({});

    useEffect(() => {
        axios(`http://infilate.com/backend/public/api/app/organisation/detail/${props.match.params.id}`,{
            headers : {
                'Content-Type': 'application/json'
            },
            method : "POST",
            body : JSON.stringify({organization_id : props.match.params.id})
        }).then(res => {
            if(res && res.data && res.data.Data) {
                setOrganizationDetails(res.data.Data[0][0]);
            }
        }).catch(err => {
            setOrganizationDetails({});
        })
    },[])


    console.log(organizationDetails)
    if(Object.keys(organizationDetails).length > 0)
    return (
        <div className = "brand-container">
            <div className = "brand-banner">
                {
                (organizationDetails.banner_media_type === 'jpg' || organizationDetails.banner_media_type === 'jpeg' || organizationDetails.banner_media_type === 'png') ?
                <img src = {`http://infilate.com/backend/public/images/${organizationDetails.banner_media}`} />
                :
                <></>
                }
            </div>
            <div className = "brand-section">
                <div className = "brand-hero">
                    <div className = "brand-image">
                        <img src = {`http://infilate.com/backend/public/images/${organizationDetails.image}`} />
                    </div>
                    <div className = "brand-details">
                        <h3>{organizationDetails.title}</h3>
                        <ul className = "brand-creds">
                            <li><i class="fas fa-map-marker-alt"></i> {organizationDetails.address_line_1 + (organizationDetails.address_line_2 ? (", " + organizationDetails.address_line_2) : "") + ", " + organizationDetails.city + ", " + organizationDetails.state + ", " + organizationDetails.country + " - " + organizationDetails.pincode}</li>
                            <li><i class="fas fa-phone-alt"></i> {organizationDetails.contact_no}</li>
                            <li><i class="far fa-envelope"></i> {organizationDetails.email}</li>
                        </ul>
                    </div>
                </div>
                
                <div className = "brand-desc">
                    <h6>About</h6>
                    <p>{organizationDetails.description}</p>
                    <a target = "_blank" href = {organizationDetails.url ? organizationDetails.url : ""}><i class="fas fa-globe"></i>  WEBSITE</a>
                </div>
            </div>
        </div>
    )
    else 
    return <></>
}

export default withRouter(Brand)

