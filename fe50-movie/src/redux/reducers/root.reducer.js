import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    user: UserReducer,
    common:commonReducer ,
  });
  
  export default rootReducer;