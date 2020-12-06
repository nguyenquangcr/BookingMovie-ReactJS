import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo1.png'
import SlickHeader from '../slider';
import './style.scss';

class Header extends Component {

    _clearItem = () => {
        localStorage.removeItem('credentials');
        this.props.dispatch({
            type: 'CLEAR_CREDENTIAL'
        })
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-logo"><NavLink className="" to='/'><img className="header-logo-img" src={logo} alt="" /></NavLink></div>
                <ul className="header-menu header-menu-left">
                    <li className="header-menu-item">
                        <NavLink exact activeClassName={'active'} to='/' className="header-menu-link">Trang chủ</NavLink>
                    </li>
                    <li className="header-menu-item">
                        <NavLink className="header-menu-link" to='/phim'>Phim<i className="fa fa-angle-down" aria-hidden="true"></i>
                        </NavLink>
                        <ul className="header-menu-dropdown">
                            <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/phim-dang-chieu'>Phim đang chiếu</NavLink></li>
                            <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/phim-sap-chieu'>Phim sắp chiếu</NavLink></li>
                        </ul>
                    </li>
                    <li className="header-menu-item">
                        <NavLink className="header-menu-link" to='/tin-tuc'>Tin tức<i className="fa fa-angle-down" aria-hidden="true"></i></NavLink>
                        <ul className="header-menu-dropdown">
                            <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/goc-dien-anh'>Góc điện ảnh</NavLink></li>
                            <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/su-kien'>Sự kiện</NavLink></li>
                        </ul>
                    </li>
                    <li className="header-menu-item">
                        <NavLink className="header-menu-link" to='/ho-tro'>Hỗ trợ</NavLink>
                    </li>

                </ul>
                <ul className="header-menu header-menu-right">
                    {
                        this.props.credentials ?
                            <li style={{ display: 'flex' }} className="header-menu-item">
                                <span className="header-menu-link">Hi {this.props.credentials.hoTen},</span>
                                <button onClick={this._clearItem} className="btn btn-success">Thoát</button>
                            </li>
                            :
                            <>
                                <li className="header-menu-item">
                                    <NavLink className="header-menu-link" to="/dangky">Đăng Ký</NavLink>
                                </li>
                                <li className="header-menu-item">
                                    <NavLink className="header-menu-link header-menu-link-login" to="/dangnhap">Đăng Nhập</NavLink>
                                </li>
                            </>
                    }
                </ul>
                <div className="header-search">
                    <select className="header-search-select">
                        <option value="united">TV show</option>
                        <option value="saab">Others</option>
                    </select>
                    <input className="header-search-input" type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
                    <i className="fa fa-search header-search-icon"></i>
                </div>
                <div className="header-social">
                    <span>Theo dõi: </span>
                    <a href="#link-facebook"><i className="fa fa-facebook" /></a>
                    <a href="#link-twitter"><i className="fa fa-twitter" /></a>
                    <a href="#link-googleplus"><i className="fa fa-google-plus" /></a>
                    <a href="#link-youtube"><i className="fa fa-youtube" /></a>
                </div>
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
