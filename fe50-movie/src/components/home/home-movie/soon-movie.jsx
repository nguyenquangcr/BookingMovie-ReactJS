import React from 'react'
import { connect } from "react-redux";
import classNames from 'classnames';
//css
import './soon-movie.scss';
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
                    <div className='film'>
                        <a href>
                            <img style={{ width: '180px', height: '255px', paddingRight: '45px' }} src={item.hinhAnh} alt="film" />
                        </a>
                        <p className={classNames({'improve-name-film':item.tenPhim && item.tenPhim.length >= 10},"name-movie")} >
                            {item.tenPhim}
                        </p>
                    </div>
                </div>
            )
        })
    }

    AOS.init()
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
        <div data-aos="fade-down" data-aos-duration="600" className="soon-movie" style={{ paddingRight: '210px' }}>
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
