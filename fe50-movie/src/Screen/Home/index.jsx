import React from 'react'

import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';

//style css
import './style.css'

const Home = () => {
    return (
        <div>
            <div className='header'>
                <SlickHeader />
            </div>
            <Footer />

        </div>
    )
}

export default Home
