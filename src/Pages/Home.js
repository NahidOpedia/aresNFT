import React,{ useEffect } from 'react';
import Aboutus from '../components/Aboutus/Aboutus';
import Ambition from '../components/Ambition/Ambition';
import Born from '../components/Born/Born';
import Chat from '../components/Chat/Chat';
import Dream from '../components/Dream/Dream';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Reality from '../components/Reality/Reality';

import './Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    
useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div>
            <Header/>
            <div data-aos="fade-up">
                <Born />
            </div>
            <div className="section-2-bg">
                <div data-aos="fade-down">
                    <Aboutus/>
                </div>
                <div data-aos="fade-up">            
                    <Reality/>
                </div>
            </div>
                <div data-aos="fade-up">
                    <Ambition/>
                </div>
            <div>    
                <Dream />
            </div>
                <Footer />
            
            <Chat/>
        </div>
    );
};

export default Home;