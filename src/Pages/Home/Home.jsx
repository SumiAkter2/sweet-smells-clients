import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import SweetCard1 from './SweetCard1';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products/>
           <SweetCard1/>
        </div>
    );
};

export default Home;