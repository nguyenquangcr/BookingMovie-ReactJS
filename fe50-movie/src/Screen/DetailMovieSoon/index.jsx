import React from 'react';
import Header from '.././../components/header/index';
import Footer from '../../components/footer/index';
import { useParams } from 'react-router-dom';

const Detailmoviesoon = () => {

    const param = useParams();

    console.log('param', param);

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <h1>Đây là Detail Movie Comming Soon</h1>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Detailmoviesoon
