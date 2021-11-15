import React from 'react';
import MyOrders from '../../Dashboard/MyOrders/MyOrders';
import Banner from '../Banner/Banner';
import About from '../Header/About/About';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <Services></Services>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;