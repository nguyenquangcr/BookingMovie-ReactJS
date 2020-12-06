import React from 'react';
import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';

//style css
import './style.css'
import HomeMovie from '../../components/home/home-movie';
import TicketBooking from '../../components/home/ticket-booking';
import Cinema from '../../components/home/cinema';

const Home = () => {

    return (
        <div style={{ backgroundColor: '#030d18' }}>
            <div className='header'>
                <SlickHeader />
            </div>
            <div className='container' >
                <div className='row'>
                    <div className='col-8'>
                        <HomeMovie />
                    </div>
                    <div className='col-4'>
                        <TicketBooking />
                    </div>
                </div>

                <HomeMovie />

                <Cinema />

            </div>

            <Footer />
        </div>
    )
}


export default Home;
