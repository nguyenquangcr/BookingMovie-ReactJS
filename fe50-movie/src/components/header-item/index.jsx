import React, { Component } from 'react';
import Header from '../header';
import SlickHeader from '../slider';
class HeaderItem extends Component {
    render() {
        return (
            <div className='header'>
                <div className="container">
                    <Header />
                    <SlickHeader />
                </div>
            </div>
        )
    }
}
export default HeaderItem;