import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment/dist";
import EventIcon from '@material-ui/icons/Event';
import axios from "axios";
import "./allWebinar.css"


export default () => {
  const [webinarsList, setWebinarsList] = useState([])
  const [fetchUrl, setFetchUrl] = useState("http://infilate.com/backend/public/api/app/webinars/webinar-list");
  const [totalWebinars, setTotalWebinars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading) {
      axios(fetchUrl, {
        method: 'POST'
      }).then((res) => {
        if(res && res.data && res.data.Data) {
          setWebinarsList(prevState => ([
            ...prevState, ...res.data.Data.data
          ]));
          setTotalWebinars(res.data.Data.total);
          setFetchUrl("" + res.data.Data.next_page_url)
          setLoading(false)
        }
      }).catch(e=>{
          setWebinarsList([]);
          setTotalWebinars(0);
          setFetchUrl("http://infilate.com/backend/public/api/app/webinars/webinar-list")
          setLoading(false)
      }) 
    }

    },[loading]);

  return (
    <div className = "webinars-container">
        <div className = "webinars-section">
            {webinarsList.length > 0 ? 
            webinarsList.map((webinar, index) => {
              let date = new Date(webinar.webinar_date);
              let start_time = (parseInt(webinar.webinar_start_time.substring(0,2)) % 12) + ":" + webinar.webinar_start_time.substring(3,5) + (parseInt(webinar.webinar_start_time.substring(0,2)) >= 12 ? " PM" : " AM");
              return (
                <Link key = {`webinars${index}`} to = {`/webinarDetails/${webinar.id}`}>
                  <div className = "webinar-card">
                    <div className = "webinar-car-image">
                      <img src = {`http://infilate.com/backend/public/images/${webinar.image}`} onError = {(e) => e.target.src = "/Assets/Images/webinar.png"} />
                    </div>
                    <ul className = "webinar-card-content">
                      <li><h6>{webinar.webinar_name}</h6></li>
                      <li><span><Moment format = {"dddd, DD MMM, YYYY"}>{date}</Moment> | {start_time}</span></li>
                      <li><span>{webinar.price ? (webinar.discount ? ("₹" + parseInt(parseFloat(webinar.price) - parseFloat((parseFloat(webinar.price) * webinar.discount) / 100))) : webinar.price) : "Free"}</span><span>{webinar.price ? ("₹" + webinar.price) : ""}</span></li>                   
                    </ul>
                  </div>
                </Link>
              )
            })
            :
            <></>
            }
        </div>
        {webinarsList.length < totalWebinars ?
        <div className = "load-more-btn">
          {loading ? 
          <img src = "/Assets/Images/ajax-loader.gif" />
          :
          <button onClick = {() => setLoading(true)}>Load Webinars</button>
          }
        </div>
        :
        <></>
        }
    </div>
  );
};
