import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'
import { getDetailMovie } from '../../redux/action/detail.action';
import Header from '.././../components/header/index';
import Footer from '../../components/footer/index';
import DatVe from './datVe';
import DanhGia from './danhGia';
import ShowMovie from './show-movie';
import SoonMovie from './soon-movie';
import './style.scss';

const Detail = () => {
    const [movieSoon, setMovieSoon] = useState('');
    const param = useParams();
    const dispatch = useDispatch();
    const detailMovie = useSelector((state) => state.detail.detailMovie);
    const maPhimCommingSoon = useSelector((state) => state.detail.maPhimCommingSoon);

    const listMovie = useSelector((state) => state.movie.movieList);
    const listSoonMovie = useSelector((state) => state.movie.listSoonMovie);

    console.log('listMovie', listMovie);
    console.log('listSoonMovie', listSoonMovie);
    useEffect(() => {
        const str = param.maPhim;
        const id = str.substring(str.lastIndexOf("-") + 1, str.length);
        dispatch(getDetailMovie(id))
    }, [])

    // kiem tra phim co phai coomingsoon khong
    useEffect(() => {
        const str = param.maPhim;
        const id = str.substring(str.lastIndexOf("-") + 1, str.length);
        maPhimCommingSoon && maPhimCommingSoon.map(item => {
            if (item === id) {
                return setMovieSoon('active');
            }
        })
    }, [])

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="container">
                <div className="detail section-padding">
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-4">
                                    <div><img src={detailMovie.hinhAnh} /></div>
                                </div>
                                <div className="col-8">
                                    <div className="detail-title">{detailMovie.tenPhim}</div>
                                    <div className="detail-rating">
                                        <div className="detail-rating-left">
                                            <i className="fa fa-star"></i>
                                            <div className="detail-rating-index">
                                                <span>4.1</span> /5<br />
                                                <label className="detail-rating-rv">56 Reviews</label>
                                            </div>
                                        </div>
                                        <div className="detail-rating-right">
                                            <span>Đánh giá:</span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="detail-action">
                                        {movieSoon ? <Link
                                            activeClass="active"
                                            to="booking"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            className="detail-action-item">
                                            <i className="fa fa-opencart"></i> Đặt vé
                                        </Link>
                                        : null
                                        }
                                        <Link
                                            className="detail-action-item"
                                            activeClass="active"
                                            to="comment"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}>
                                            <i className="fa fa-comment"></i> Bình luận
                                        </Link>
                                        <div className="detail-action-item">
                                            <i className="fa fa-share-alt"></i> Chia sẻ
                                        </div>
                                    </div>
                                    <div className="detail-info">
                                        <li>Đạo diễn: <span>Mez Tharaton</span></li>
                                        <li>Diễn viên: <span>Baifern Pimchanok, Thiti Mahayotaruk, Nadech Kugimiya</span></li>
                                        <li>Quốc gia: <span>Mez Tharaton</span></li>
                                        <li>Thể loại: <span>Mez Tharaton</span></li>
                                        <li>Ngày giờ: <span>{new Date(detailMovie.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</span></li>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="detail-desc">
                                        <h3 className="heading-left">Nội dung phim</h3>
                                        <div className="detail-desc-content" dangerouslySetInnerHTML={{ __html: detailMovie.moTa }}></div>
                                    </div>
                                    {
                                        movieSoon ? 
                                        <>
                                            <div className="detail-system">
                                                <DatVe Detail={detailMovie.heThongRapChieu} />
                                            </div>
                                        </> : null
                                    }
                                    <DanhGia />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div>
                                <h3 className="heading-left">Phim đang chiếu</h3>
                                <ShowMovie />
                            </div>
                            <div>
                                <h3 className="heading-left">Phim sắp chiếu</h3>
                                <SoonMovie />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Detail
