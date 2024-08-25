import React from 'react'
import './Work.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { workdata } from './Workdata';
import arrow from '../../assets/arrow_icon.svg'

const Work = () => {
    return (
        <div id='work' className="Mywork">
            <div className="work-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="Mywork-container">
                {workdata.map((v, i) => {
                    return (
                        <img key={i} src={v.image} />
                    )
                })}
            </div>
            <div className="readmore-work">
                <p>See More</p>
                <img src={arrow} alt="" />
            </div>
        </div>

    )
}

export default Work