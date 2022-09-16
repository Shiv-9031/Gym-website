import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from'../../pic/hero_image.png'
import heart from'../../pic/heart.png'
import hero_image_back from'../../pic/hero_image_back.png'
import Calories from'../../pic/calories.png'
const Hero=()=>{
    return(
      <div className="Hero">
        <div className="left-hero">
            <Header/>
         {/* the best add */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
            {/*  Hero Heading  */}
            <div className="Hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span >Ideal Body</span>
                </div>
                <div>
                    <span>
                    in here we will help you to shape and build your ideal body and live up your life to fullest

                    </span>

                </div>
            </div>
            {/*------------ figure---------- */}
            <div className="figure">
                <div>
                    <span>+140</span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* Hero-button */}
            <div className="Hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-hero">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
                <img src={heart} alt="heart" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
        {/* hero images */}
        <img src={hero_image} className="hero-image" alt='hero-image' />
        <img src={hero_image_back} className="hero-image-back" alt='hero-image-back' />
        <div className="calories">
            <img src={Calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
           
        </div>
        </div>
      </div>
    )
}
export default Hero;