import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/image/logo1.png'
import './style.scss';

class Header extends Component{

    _clearItem = ()=>{
        localStorage.removeItem('credentials');
        this.props.dispatch({
            type:'CLEAR_CREDENTIAL'
        })
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark container">
                    <a className="navbar-brand" href="#"><img style={{ height: "52px" }} src={logo} alt="Girl in a jacket" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown dropdown-6">
                                <NavLink exact activeStyle={{color:'red'}} to='/' className="nav-link" href="#">TRANG CHỦ<i className="fa fa-angle-down" aria-hidden="true"></i></NavLink>
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                                    <li className="dropdown_item">Item 1</li>
                                    <li className="dropdown_item">Item 2</li>
                                    <li className="dropdown_item">Item 3</li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-7">
                                <a className="nav-link" href="#">PHIM<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                    <li className="dropdown_item">Item 1</li>
                                    <li className="dropdown_item">Item 2</li>
                                    <li className="dropdown_item">Item 3</li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-8">
                                <a className="nav-link" href="#">NGƯỜI NỔI TIẾNG<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                    <li className="dropdown_item">Item 1</li>
                                    <li className="dropdown_item">Item 2</li>
                                    <li className="dropdown_item">Item 3</li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-9">
                                <a className="nav-link" href="#">TIN TỨC<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-9">
                                    <li className="dropdown_item">Item 1</li>
                                    <li className="dropdown_item">Item 2</li>
                                    <li className="dropdown_item">Item 3</li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-10">
                                <a className="nav-link" href="#">QUỐC GIA<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-10">
                                    <li className="dropdown_item">Item 1</li>
                                    <li className="dropdown_item">Item 2</li>
                                    <li className="dropdown_item">Item 3</li>
                                </ul>
                            </li>
    
                        </ul>
                        <ul className="form-inline mt-2 mt-md-0 navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">TRANG<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TRỢ GIÚP</a>
                            </li>
                            {
                                        this.props.credentials ?
                                            <li style={{display:'flex'}} className="nav-item">
                                                <span className="nav-link">Hi {this.props.credentials.hoTen},</span>
                                                {/* <NavLink activeStyle={{ color: "red" }} className="nav-link" to="/signin">Sign</NavLink> */}
                                                <button onClick={this._clearItem} className="btn btn-success">Thoat</button>
                                            </li>
                                            :
                                            <>
                                                <li className="nav-item">
                                                    <NavLink activeStyle={{ color: "red" }} className="nav-link" to="/dangky">Đăng Ký</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink activeStyle={{ color: "red" }} className="nav-link" to="/dangnhap">Đăng Nhập</NavLink>
                                                </li>
                                            </>
                                    }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.user.credentials
    }
}

export default connect(mapStateToProps)(Header)
