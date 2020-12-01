import React, { Component } from 'react'
import './style.css';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg';
import slider4 from '../../assets/image/slider4.jpg';

export default class SlickHeader extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 800,
        };
        return (
            <div className="container slide-item">
                <Slider {...settings}>
                    <div>
                        <a href="#">
                            <img src={slider1} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider2} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider3} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider4} alt="" />
                        </a>
                    </div>                    <div>
                        <a href="#">
                            <img src={slider1} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider2} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider3} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={slider4} alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        )
    }
}



