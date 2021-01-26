import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../../redux/action/detail.action';
import Header from '.././../components/header/index';
import Footer from '../../components/footer/index';
import DatVe from './datVe';
import DanhGia from './danhGia';

const Detail = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const detailMovie = useSelector((state) => state.detail.detailMovie);
    console.log('detailMovie',detailMovie);
    useEffect(() => {
        dispatch(getDetailMovie(param.maPhim))
    }, [])

    const [isValid, setIsValid] = useState(true);
    const renderTicket = () => {
        return isValid ? "active" : ""
    }
    const renderComment = () => {
        return isValid ? "" : "active"
    }
    const renderHtml = () => {
        return isValid ? <DatVe Detail = {detailMovie.heThongRapChieu} />  : <DanhGia />
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className="row">
                    <div className='col-4'>
                        <div><img src={detailMovie.hinhAnh} /></div>
                    </div>
                    <div className='col-8'>
                        <div>Tên Phim : {detailMovie.tenPhim} </div>
                        <div>Ngày Khởi chiếu : {new Date(detailMovie.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })} </div>
                        <div>Mô Tả : {detailMovie.moTa} </div>
                    </div>
                </div>
                <div>
                    <ul className="scmovie-tabs">
                        <li className={renderTicket()} onClick={() => {setIsValid(true)}}>
                            Đặt Vé
                        </li>
                        <li className={renderComment()} onClick={() => {setIsValid(false)}}>
                            Đánh Giá
                        </li>
                    </ul>
                    <div className="scmovie-list">
                        {renderHtml()}
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
