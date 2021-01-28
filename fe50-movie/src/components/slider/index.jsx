import React from 'react'
import { useSelector } from 'react-redux';
import './style.scss';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg';
import slider4 from '../../assets/image/slider4.jpg';
import { Link } from 'react-router-dom';

const SlickHeader = () => {

    const movieSoon = useSelector(state => state.movie.listSoonMovie)
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        draggable: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    const rederSlider = () => {
        return movieSoon && movieSoon.map((item, index) => {
            return (
                <Link to={`/commingsoon/${item.biDanh}/${item.maPhim}`} className="banner-slider-item" key={index}>
                    <a href="#">
                        <img className="banner-slider-image" src={item.hinhAnh} alt="" />
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">{new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</div>
                            <div className="banner-slider-title">
                                {item.tenPhim}
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>{item.danhGia}/</span>10
                        </div>
                        </div>
                    </a>
                </Link>
            )
        })
    }
    return (
        <div>
            <Slider className="banner-slider" {...settings}>
                {rederSlider()}
            </Slider>
        </div>
    )
}

export default SlickHeader