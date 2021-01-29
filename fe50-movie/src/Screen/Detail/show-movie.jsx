import React, { useEffect } from 'react'
import { useDispatch, connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import { getMovieListRequest } from '../../redux/action/movie.action';

const ShowMovie = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListRequest())
    }
        , [dispatch]);

    const renderHtml = () => {
        return props.movieList && props.movieList.map((item, index) => {
            return (
                <Link to={`/movie/${item.biDanh}-${item.maPhim}`} className="detail-scmovie-item" key={index}>
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
    const { isLoading } = props;
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        renderHtml()
    )
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(ShowMovie);
