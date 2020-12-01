import React, { Component } from "react";
import { getMovieListRequest } from '../../redux/action/movie.action';
import { connect } from "react-redux";
import MovieItem from "../../components/movieItem";
import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';
class Home extends Component {
    renderMovieList = () => {
        const { movieList } = this.props;
        // cách 1
        // if (movieList) {
        //   return movieList.map((movie, index) => {
        //     return (
        //       <Grid item sm={3} key={index}>
        //         <MovieItem movie={movie} />
        //       </Grid>
        //     );
        //   });
        // }
        // cách 2
        return movieList?.map((movie, index) => {
            return (
                <div className='row'>
                    <MovieItem movie={movie} key={index} />
                </div>
            );
        });
    };
    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return <div>
                Đang Load
            </div>;
        }
        return (
            <div>
                <div className='header'>
                    <SlickHeader />
                    {
                        this.renderMovieList()
                    }
                </div>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        //   dispatch action
        this.props.dispatch(getMovieListRequest());
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.common.isLoading,
        movieList: state.movie.movieList,
    };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getListMovie: () => {
//       dispatch(getMovieListRequest());
//     },
//   };
// };

export default connect(mapStateToProps)(Home);
