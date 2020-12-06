import Axios from "axios";

export function getBookingRequest(maLichChieu) {
    return (dispatch) =>{
        Axios.get(
            "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        ).then(res =>{
            dispatch(getCinemaListSuccess(res.data))
        })
        .catch(err =>{
            getCinemaListFailed(err)
        })
    }
}

function getCinemaListSuccess(cinema) {
    return {
      type: "GET_CINEMA_lIST_SUCCESS",
      payload: cinema,
    };
  }
  
  function getCinemaListFailed(error) {
    return {
      type: "GET_CINEMA_lIST_FAILED",
      payload: error,
    };
}

export function actionDetailLocation(maHeThongRap) {
    return (dispatch) =>{
        Axios.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        ).then(res=>{
            dispatch(
                GetListDetailLocationSuccess(res.data)
            )
        }).catch(err =>{
            GetListDetailLocationFalse(err)
        })
    }
}


function GetListDetailLocationSuccess(cinemaLocation) {
    return {
      type: "GET_CINEMA_DETAIL_SUCCESS",
      payload: cinemaLocation,
    };
}

function GetListDetailLocationFalse(err) {
    return {
      type: "GET_CINEMA_DETAIL_FALSE",
      payload: err,
    };
}
  