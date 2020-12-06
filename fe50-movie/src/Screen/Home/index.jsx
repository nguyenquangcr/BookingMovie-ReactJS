import React from 'react';
import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';

//style css
import './style.css'
import HomeMovie from '../../components/home/home-movie';
import TicketBooking from '../../components/home/ticket-booking';
import Cinema from '../../components/home/cinema';
import Header from '../../components/header';

const Home = () => {

    return (
        <div style={{ backgroundColor: "#030d18" }}>
            <div className="header">
                <div className="container">
                    <Header />
                    <SlickHeader />                    
                    <TicketBooking />
                </div>
            </div>
            <div className="container">
                <HomeMovie />

                <Cinema />

            </div>

            <Footer />
        </div>
    )
}


export default Home;
