import React from 'react';
import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';

//style css
import './style.css'
import HomeMovie from '../../components/home/home-movie';

const Home = () => {

    return (
        <div>
            <div className='header'>
                <SlickHeader />
            </div>
            <div style={{backgroundColor: '#030d18'}}>
                    <HomeMovie />
                    <HomeMovie />
            </div>

            <Footer />
        </div>
    )
}


export default Home;
