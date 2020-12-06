import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { actionDetailLocation, getBookingRequest } from '../../../redux/action/cinema.action';

const Cinema = (props) => {
    const dispatch = useDispatch();
    const [cumRapFirst, setcumRapFirst] = useState('BHDStar');

    useEffect(() => {
        dispatch(actionDetailLocation(cumRapFirst))
        dispatch(getBookingRequest())
    }, [])

    const renderRap = () => {
        return props.listCinema.map((item, index) => {
            return (
                <div key={index} onClick={HandleChangeLocation}>
                    <img src={item.logo} style={{marginRight:'20px', width: '100px' }} />
                </div>
            )
        })
    }

    const HandleChangeLocation = () =>{
        dispatch()
    }

    //render he thong
    const renderLocation = () =>{
        return props.detailLocation.map((item,index)=>{
            return(
                <div key={index} className='m-2'>
                   <div>Ten Rap: {item.tenCumRap}</div>
                   <div>Dia Chi {item.diaChi}</div>
                </div>
            )
        })
    }   

    return (
        <div>
            <h1>Cinema</h1>
            <div style={{ display: 'flex' }}>
                {renderRap()}
            </div>
            <div>
                {renderLocation()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listCinema: state.cinema.listCinema,
        detailLocation : state.cinema.listDetailCinema
    }
}

export default connect(mapStateToProps)(Cinema);
