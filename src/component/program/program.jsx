import React from 'react';
import './program.css';
import {programsData}from '../../data/programsData';
import rightArrow from '../../pic/rightArrow.png'

const Program=()=>{

    return(
        <div className="programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore Our</span><span>Programs</span><span className='stroke-text'>to shape yours</span>
            </div>
            <div className="programs-category">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span><span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={rightArrow}alt="rightArrow" />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
export default Program;