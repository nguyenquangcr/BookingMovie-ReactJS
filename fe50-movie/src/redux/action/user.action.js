import { userService } from "../../Services";


export const login = (user,history) =>{
    return (dispatch) =>{
        userService.signIn(user)
        .then(res=>{
            if(res.data.maLoaiNguoiDung === "KhachHang"){
                dispatch(loginUser(res.data));
                localStorage.setItem('credentials',JSON.stringify(res.data))
                history.push("/");
            }else{
                alert('Vui lòng nhập tài khoản khách hàng')
            }
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