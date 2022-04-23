import React from 'react';
import About from '../components/About/About';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer'
import "./Aresabout.css";
import aboutImg from '../assets/images/about.png';

import Abouticon1 from '../assets/images/about-icon-1.svg';
import Abouticon2 from '../assets/images/about-icon-2.svg';
import Abouticon3 from '../assets/images/about-icon-3.svg';
import Abouticon4 from '../assets/images/about-icon-4.svg';
import Home from './Home';


const Aresabout = () => {
    return (
        <div className='ares-about'>
            <Home/>
        </div>
    );
};

export default Aresabout;