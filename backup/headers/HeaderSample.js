import React from 'react';
import "./header.css";

export default function HeaderSample() {
    return (
        <nav className = "navbar">
            <section className = "navbar_upper_section">
                <div className = "header_logo">
                    <img src = "/Assets/Images/infi-logo.png" />
                </div>
                <div className = "dropdown">
                    <span className = "dropdown_header"><i class="fas fa-user-alt"></i> PROFILE</span>
                    <div className = "dropdown_box">
                        <div className = "dropdown-box-content">
                            <div className = "dropdown-box-content-img">
                                <img src = "/Assets/Images/cashback2.png" />
                            </div>
                            <p><span>Welcome!</span><br/>Earn extra cashback on top of other discounts on your shopping via Infilate.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ul className = "navbar_links">
                    <li>WEBINAR</li>
                    <li>COMPARE</li>
                    <li>TOP STORIES</li>
                    <li>COUPONS</li>
                </ul> 
            </section>           
        </nav>
    )
}
