import { userService } from "../../Services";


export const login = (user,history) =>{
    return (dispatch) =>{
        userService.signIn(user)
        .then(res=>{
            dispatch(loginUser(res.data));
            localStorage.setItem('credentials',JSON.stringify(res.data))
            history.push("/");
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

function loginUser(userLogin) {
    return {
      type: "FETCH_CREDENTIAL",
      payload: userLogin,
    };
  }