import React from 'react';
import AresContain from '../components/Aresedition/AresContain';
import Navbar from '../components/Header/Navbar';
import './Aresedition.css';
import Footer from '../components/Footer/Footer';
import Chat from '../components/Chat/Chat';
const Aresedition = () => {
    return (
        <div className='ares-bg'>
           <Navbar/>
           <AresContain/>
           <Footer />
           <Chat/>
        </div>
    );
};

export default Aresedition;