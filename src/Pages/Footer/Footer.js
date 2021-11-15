import { faCcAmazonPay, faCcAmex, faCcMastercard, faCcVisa, faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div style={{ color: "white", backgroundColor: "#222222" }} className=" d-lg-flex  p-5">
                <div className="m-4 text-start" >
                    <h4 className="">Contact Us</h4>
                    <div>
                        <div style={{ color: "#F97150" }} className="d-flex p-1">
                            <FontAwesomeIcon className="m-1" icon={faPhoneAlt} />
                            <Link className="decor px-2" to="/home">+6-345-3456-233</Link>
                        </div>
                        <div style={{ color: "#F97150" }} className="d-flex p-1">
                            <FontAwesomeIcon className="m-1" icon={faEnvelope} />
                            <Link className="decor px-2" to="/home">Ask@traveltourtheme.com</Link>
                        </div>
                        <div style={{ color: "#F97150" }} className="d-flex p-1">
                            <FontAwesomeIcon className="m-1" icon={faMapMarkerAlt} />
                            <Link className="decor px-2" to="/home">Manama Tower, Badda Link-Road, <br />  Badda Dhaka, Bangladesh</Link>
                        </div>
                    </div>

                </div>

                <div className="m-4 mx-5 text-start">
                    <h4 className="">About Us</h4>
                    <div className="mt-3">
                        <div>
                            <Link className="decor" to="/about">Our Story</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Travel Blog and Tips</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Working With Us</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Be Our Partner</Link>
                        </div>
                    </div>
                </div>
                <div className="m-4 mx-5 text-start">
                    <h4 className="">Support</h4>
                    <div className="mt-3">
                        <div>
                            <Link className="decor" to="/home">Customer Support</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Privacy and Policy</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Contact Channels</Link>
                        </div>
                        <div>
                            <Link className="decor" to="/home">Testimonials</Link>
                        </div>
                    </div>
                </div>
                <div className="m-4 mx-5 text-start">
                    <h4 className="">Pay Safely With Us</h4>
                    <p>The payment is encrypted and  <br /> transmittedsecurely with an SSL <br />  protocol.</p>
                    <div className="d-flex mt-3">
                        <div>
                            <FontAwesomeIcon className="m-1" icon={faCcVisa} size="3x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className="m-1 mx-2" icon={faCcMastercard} size="3x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className="m-1  mx-2" icon={faCcAmex} size="3x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className="m-1  mx-2" icon={faCcAmazonPay} size="3x" />
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ color: "white", backgroundColor: "#181818" }} className=" d-lg-flex justify-content-between p-4 px-5">
                <p className="text-muted">© 2019 Travel Tour All Rights Reserved.</p>
                <div className="d-flex">
                    <div>
                        <p className="text-muted">Follow Us On</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="m-1  mx-2" icon={faFacebookF} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="m-1  mx-2" icon={faInstagram} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="m-1  mx-2" icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="m-1  mx-2" icon={faPinterest} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;