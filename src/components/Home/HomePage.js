import React from 'react';
import Hero from './hero/Hero';
import Discover from './mainComponent/Home/discover/Discover';
import Home from './mainComponent/Home/Home';


const HomePage = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Hero />
            <Home />
            <Discover />

        </div>
    );
};

export default HomePage;