import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow from '../../assets/arrow_icon.svg'
import { Servicedata } from './ServicesData';

const Service = () => {
    return (
        <div id='service' className="services">
            <div className="service-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="service-container">
                {Servicedata.map((services, index) => {
                    return (
                        <div key={index} className="service-formate">
                            <h3>{services.no}</h3>
                            <h2>{services.name}</h2>
                            <p>{services.description}</p>
                            <div className="readmore">
                                <p>Read More</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service