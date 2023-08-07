// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainInterFace from '../MainInterFace/MainInterFace';

const Home = () => {
    return (
        <div>

            <Header></Header>
             <MainInterFace></MainInterFace>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;