import React, { useEffect } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

//css
import useStyles from './style.js';
import { getBookingRequest, postBookingRequest } from '../../redux/action/booking.action';

const Booking = () => {
    const history = useHistory();
    const { maLichChieu } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();
    const danhSachGhe = useSelector((state) => state.booking.danhSachGhe);

    function trangThaiGhe(daDat, dangChon) {
        if (daDat) {
            // đã đặt
            return classes.daDat;
        } else {
            // chửa đặt
            if (dangChon) {
                // dang chon
                return classes.dangChon;
            } else {
                // chưa chọn
                return classes.chuaDat;
            }
        }
    }

    useEffect(() => {
        dispatch(getBookingRequest(maLichChieu))
    }, [dispatch, maLichChieu]);

    const renderGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            console.log(ghe.dangChon);
            return (
                <>
                    <Button
                        key={index}
                        className={trangThaiGhe(ghe.daDat, ghe.dangChon)}
                        onClick={() => {
                            dispatch({
                                type: "CHON_GHE",
                                payload: ghe,
                            });
                        }}
                    >
                        {ghe.stt}
                    </Button>
                </>
            );
        });
    }

    //dat ve 
    function handleBooking() {
        let danhSachVe = danhSachGhe.filter((ghe) => ghe.dangChon);
        danhSachVe = danhSachVe.map((ghe) => ({
          maGhe: ghe.maGhe,
          giaVe: ghe.giaVe,
        }));
        dispatch(postBookingRequest(maLichChieu, danhSachVe,history));
      }

    return (
        <div>
            <h1>Booking</h1>
            <div>{renderGhe()}</div>
            <div>
                <Button
                    variant="contained"
                    style={{ marginTop: "5px" }}
                    color="secondary"
                    onClick={handleBooking}
                >
                    Đặt Vé
                </Button>
            </div>
        </div>
    )
}

export default Booking;
