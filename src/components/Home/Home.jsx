import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h3>This is home.</h3>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;