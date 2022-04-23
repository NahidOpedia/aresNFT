import React from 'react';
import Navbar from './Navbar';
import bgVideo from '../../assets/bg-img/bg-video.mp4';
import './Header.css';



const Header = () => {
    return (
            <div className='header'>
                <video autoPlay loop muted>
                    <source src={bgVideo} type='video/mp4'/>
                </video>
                <div className="absolute h-full w-full inset-0 ">
                    <Navbar />
                </div>
            </div>
    );
};

export default Header;