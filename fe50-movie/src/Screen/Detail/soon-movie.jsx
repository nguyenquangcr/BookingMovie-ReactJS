import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const SoonMovie = (props) => {
    const renderHtml = () => {
        return props.listSoonMovie && props.listSoonMovie.map((item, index) => {
            return (
                <Link to={`/commingsoon/${item.biDanh}-${item.maPhim}`} className="detail-scmovie-item" key={index}>
                    <div className="detail-scmovie-image">
                        <img src={item.hinhAnh} alt={item.tenPhim} />
                    </div>
                    <div className="detail-scmovie-content">
                        <p className="detail-scmovie-title">{item.tenPhim}</p>
                        <p className="detail-scmovie-time">{new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </Link>
            )
        })
    }

    return (
        renderHtml()
    )
}

const mapStateToProps = state => {
    return {
        listSoonMovie: state.movie.listSoonMovie
    }
}

export default connect(mapStateToProps)(SoonMovie);
