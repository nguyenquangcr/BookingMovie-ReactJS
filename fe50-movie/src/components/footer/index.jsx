import React from 'react';
import logo from '../../assets/image/logo1.png';
import './style.scss';

const Footer = () => {
    return (
        <div className='footer-item'>
            {/* Footer */}
            <footer className="page-footer font-small blue pt-4 container">
                {/* Footer Links */}
                <div className="container-fluid text-center text-md-left">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-3 mt-md-0 mt-3">
                            {/* Content */}
                            <h5 className="text-uppercase"><img style={{ width: "119px" }} src={logo} alt="Girl in a jacket" /></h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                            <p>5th Avenue st, manhattan</p>
                            <p> New York, NY 10001</p>
                            <p>Call us: <a href="tel:0968142475">(+84) 968 142 475</a></p>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-3">
                            <h4 className="text-uppercase">Resources</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-3">
                            <h4 className="text-uppercase">Legal</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-3">
                            <h4 className="text-uppercase">Account</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>About</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h4 className="text-uppercase">Newsletter</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!"><p>Subscribe to our newsletter system now</p></a>
                                </li>
                                <li>
                                    <a href="#!"><p>to get latest news from us.</p></a>
                                </li>
                                <li>
                                    <div>
                                        <form action="#" style={{ marginbottom: "20px" }}>
                                            <input type="text" placeholder="Enter your email..." />
                                        </form>
                                    </div>
                                </li>
                                <li>
                                    <a href="#!" className="sub"><p>SUBSCRIBE NOW </p></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
