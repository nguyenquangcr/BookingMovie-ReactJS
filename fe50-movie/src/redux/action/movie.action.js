import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getMovieListRequest() {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((error) => {
        dispatch(getMovieListFailed(error));
        dispatch(stopLoading());
      });
  };
}

function getMovieListSuccess(movieList) {
  return {
    type: "GET_MOVIE_lIST_SUCCESS",
    payload: movieList,
  };
}

function getMovieListFailed(error) {
  return {
    type: "GET_MOVIE_lIST_FAILED",
    payload: error,
  };
}