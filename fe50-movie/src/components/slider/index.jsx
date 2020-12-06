import React, { Component } from 'react'
import './style.scss';
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
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            draggable:true,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
        return (
            <Slider className="banner-slider" {...settings}>
                <div className="banner-slider-item">
                    <a href="#">
                        <img className="banner-slider-image" src={slider1} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">Thứ Hai, 30/11/2020</div>
                            <div className="banner-slider-title">
                                Tên phim
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>4.5/</span>5
                            </div>
                        </div>
                    </a>
                </div>
                <div className="banner-slider-item">
                    <a href="#">
                        <img className="banner-slider-image" src={slider2} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">Thứ Hai, 30/11/2020</div>
                            <div className="banner-slider-title">
                                Tên phim
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>4.5/</span>5
                            </div>
                        </div>
                    </a>
                </div>
                <div className="banner-slider-item">
                    <a href="#">
                        <img className="banner-slider-image" src={slider3} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">Thứ Hai, 30/11/2020</div>
                            <div className="banner-slider-title">
                                Tên phim
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>4.5/</span>5
                            </div>
                        </div>
                    </a>
                </div>
                <div className="banner-slider-item">
                    <a href="#">
                        <img className="banner-slider-image" src={slider4} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">Thứ Hai, 30/11/2020</div>
                            <div className="banner-slider-title">
                                Tên phim
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>4.5/</span>5
                            </div>
                        </div>
                    </a>
                </div>
                <div className="banner-slider-item">
                    <a href="#">
                        <img className="banner-slider-image" src={slider4} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">Thứ Hai, 30/11/2020</div>
                            <div className="banner-slider-title">
                                Tên phim
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>4.5/</span>5
                            </div>
                        </div>
                    </a>
                </div>
            </Slider>
        )
    }
}



