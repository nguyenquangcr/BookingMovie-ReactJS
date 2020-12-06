import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
// import { connect } from 'react-redux';
import { login } from '../../redux/action/user.action';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function  SigninScreen () {

    const dispatch = useDispatch(); // giống this.props.dispatch
    const history = useHistory();
    
        return (
            <Formik
                initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                onSubmit={(value) => {
                    dispatch(login(value,history))
                    // console.log(value);
                }}
                render={({handleChange}) => (
                    <Form className="w-50 mx-auto mt-3">
                        <h1>ĐĂNG NHẬP</h1>
                        <div className='form-group'>
                            <label>Tài Khoản</label>
                            <Field type='text' className='form-control' name='taiKhoan' onChange={handleChange}/>
                            <label>Mật Khẩu</label>
                            <Field type='password' className='form-control' name='matKhau' onChange={handleChange} />
                        </div>
                        <button className='btn btn-success'>Đăng Nhập</button>
                    </Form>
                )}
            />

        );
    }
