import { combineReducers } from "redux";
import movieReducer from "./movi.reducer";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    user: UserReducer
  });
  
  export default rootReducer;