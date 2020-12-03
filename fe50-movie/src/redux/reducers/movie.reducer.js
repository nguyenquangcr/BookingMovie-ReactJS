const initialState = {
    movieList: null,
    movieInfo: null,
    listDetailFilm: {},
    listSoonMovie: [
      {
          hinhAnh: 'http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_3-1.jpg',
          tenPhim: "Scoob"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_4-1.jpg",
          tenPhim: "The protector"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_5-1.jpg",
          tenPhim: "The call of the wild"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_6-1.jpg",
          tenPhim: "Onward"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_2-1.jpg",
          tenPhim: "Bloodshot"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_8-1.jpg",
          tenPhim: "I still believe"
      },
      {
          hinhAnh: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_1-1.jpg",
          tenPhim: "Heartbeat"
      },
  ]
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
      case 'GET-LIST-DETAIL-HOME' :{
        return {...state, listDetailFilm: payload};
      }
      default:
        return state;
    }
  };
  
  export default movieReducer;