import React, { useEffect } from 'react'
import { useDispatch, connect } from "react-redux";
import './film.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgress } from "@material-ui/core";
import { getMovieListRequest } from '../../../redux/action/movie.action';

const ShowMovie = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListRequest())
    }
        , [dispatch]);

    const renderHtml = () => {
        return props.movieList && props.movieList.map((item, index) => {
            console.log(item);
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

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
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
    const { isLoading } = props;
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <div data-aos="fade-up" data-aos-duration="600" className="show-movie" >
            <Slider {...settings} className="my-movie">
                {renderHtml()}
            </Slider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(ShowMovie);
