import React, { useState } from 'react';

//css
import './style.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import ShowMovie from './show-movie';
import SoonMovie from './soon-movie';
const HomeMovie = () => {

    const [isValid, setIsValid] = useState(true);
    const renderTiltleShowMovie = () => {
        return isValid ? `yellow` : "white"
    }
    const renderTiletleSoonMovie = () => {
        return isValid ? "white" : `yellow`
    }
    const renderHtml = () => {
        return isValid ? <ShowMovie/>  : <SoonMovie />
    }
    AOS.init()
    return (
        <div id="home-movie">
            <section className='container' >
                <div className="container-fluid">
                <h3 className='title-index'>IN THEATER</h3>
                    <ul className="title">
                        <li data-aos="fade-right" data-aos-duration="600" 
                        className="movie-play" style={{ color: renderTiltleShowMovie(),paddingRight:'20px',marginBottom:'40px' }} 
                        onClick={() => {setIsValid(true)}}>
                                #POPULAR
                        </li>
                        <li data-aos="fade-left" data-aos-duration="600" 
                        className="movie-soon" style={{ color: renderTiletleSoonMovie() }} 
                        onClick={() => {setIsValid(false)}}>
                                #COMING SOON
                        </li>
                    </ul>
                    <div className="content-phim container-fluid">
                        {renderHtml()}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeMovie;
