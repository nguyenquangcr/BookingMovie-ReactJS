import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { actionDetailLocation, actionGetListMovieByLocation, getBookingRequest } from '../../../redux/action/cinema.action';

const Cinema = (props) => {
    const dispatch = useDispatch();
    const [cumRapFirst, setcumRapFirst] = useState('BHDStar');
    const [maCumRapLocation, setmaCumRapLocation] = useState('bhd-star-cineplex-3-2');
    //
    const listCumRap = props.listMovieDetailByLocation === null ? '' : props.listMovieDetailByLocation[0].lstCumRap
    const renderMovieByLocation = () => {
        return listCumRap && listCumRap.map((item, index) => {
            console.log(item.maCumRap);
            if (item.maCumRap === maCumRapLocation) {
                return item.danhSachPhim.map((product, index) => {
                    console.log(product.tenPhim);
                    return (
                        <div>{product.tenPhim}</div>
                    )
                })
            }
        })
    }

    useEffect(() => {
        dispatch(getBookingRequest())
    }, [])

    useEffect(() => {
        dispatch(actionDetailLocation(cumRapFirst))
        dispatch(actionGetListMovieByLocation(cumRapFirst))
    }, [cumRapFirst])


    //render rap
    const renderRap = () => {
        return props.listCinema.map((item, index) => {
            return (
                <div rel={item.maHeThongRap} key={index} onClick={() => HandleChangeRap(item.maHeThongRap)}>
                    <img src={item.logo} alt='' style={{ marginRight: '20px', width: '100px' }} />
                </div>
            )
        })
    }

    const HandleChangeRap = (maHeThongRap) => {
        setcumRapFirst(maHeThongRap)
        if(maHeThongRap==='CGV'){
            setmaCumRapLocation('cgv-aeon-binh-tan')
        }else if(maHeThongRap==='BHDStar'){
            setmaCumRapLocation('bhd-star-cineplex-3-2')
        }else if(maHeThongRap==='CineStar'){
            setmaCumRapLocation('cns-hai-ba-trung')
        }else if(maHeThongRap==='Galaxy'){
            setmaCumRapLocation('glx-kinh-duong-vuong')
        }else if(maHeThongRap==='LotteCinima'){
            setmaCumRapLocation('lotte-cantavil')
        }else if(maHeThongRap==='MegaGS'){
            setmaCumRapLocation('megags-cao-thang')
        }
    }

    //render he thong
    const renderLocation = () => {
        return props.detailLocation.map((item, index) => {
            return (    
                <div rel="js-location-item" onClick={() => handleChangeLocation(item.maCumRap)} key={index} className='m-2'>
                    <div>Ten Rap: {item.tenCumRap}</div>
                    <div>Dia Chi {item.diaChi}</div>
                </div>
            )
        })
    }
    const handleChangeLocation = (maCumRap) => {
        setmaCumRapLocation(maCumRap);
    }

    return (
        <div>
            <h1>Cinema</h1>
            <div style={{ display: 'flex' }}>
                {renderRap()}
            </div>
            <div className='row'>
                <div className='col-6'>
                    {renderLocation()}
                </div>
                <div className='col-6'>
                    {renderMovieByLocation()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listCinema: state.cinema.listCinema,
        detailLocation: state.cinema.listDetailCinema,
        listMovieDetailByLocation: state.cinema.listMovieDetailByLocation
    }
}

export default connect(mapStateToProps)(Cinema);
