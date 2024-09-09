import React from 'react';
import HeaderComponent from '../header/header';
import './home.css';
import Product from '../product/product';

const Home = () => {
    return (
        <div className='home-section'>
            <div className="home-container">
                <div className="home-title">
                    <h1>Mashhur kurslar</h1>
                </div>
                <Product />
            </div>
            <HeaderComponent/>
        </div>
    );
}

export default Home;
