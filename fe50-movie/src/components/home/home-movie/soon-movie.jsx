import React from 'react'
import { connect } from "react-redux";
//css
import './film.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos"
import "aos/dist/aos.css"

const SoonMovie = (props) => {
    console.log(props.listSoonMovie);
    const renderHtml = () => {
        return props.listSoonMovie && props.listSoonMovie.map((item, index) => {
            return (
                <div className="film-item" key={index}>
                    <a href>
                        <img className="film-image" src={item.hinhAnh} alt="film" />
                    </a>
                    <div className="film-overlay">
                        <p className="film-time">{new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</p>
                        <p className="film-title">{item.tenPhim}</p>
                        <p className="film-star"><i className="fa fa-star"></i> <span>{item.danhGia}/</span>10</p>
                    </div>
                </div>
            )
        })
    }

    AOS.init()
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
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
                breakpoint: 600,
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
    }
    return (
        <div data-aos="fade-down" data-aos-duration="600" className="soon-movie">
            <Slider {...settings} className="my-movie">
                {renderHtml()}
            </Slider>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listSoonMovie: state.movie.listSoonMovie
    }
}

export default connect(mapStateToProps)(SoonMovie);
