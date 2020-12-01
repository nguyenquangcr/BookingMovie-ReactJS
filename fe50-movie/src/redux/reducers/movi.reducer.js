const initialState = {
    movieList: null,
    movieInfo: null
  };
  
  const movieReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case "GET_MOVIE_lIST_SUCCESS": {
        return { ...state, movieList: payload };
      }
      case "GET_MOVIE_DETAIL_SUCCESS": {
        return { ...state, movieInfo: payload };
      }
      default:
        return state;
    }
  };
  
  export default movieReducer;