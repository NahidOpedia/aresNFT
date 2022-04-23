import React from 'react';
import './Reality.css';
import RealityImg from '../../assets/images/real-01.png'
import BindAres from '../BindAres/BindAres';
const Reality = () => {
    return (
        <div className='third-section-bg'>
            <BindAres />
        <div className="costom-grid grid md:grid-cols-2 sm:grid-cols-1 gap-0 mx-40 font-color">
                <div className='reality'>
                    <img src={RealityImg} className='index-1'/>
                </div>
                <div>
                    <h1 className='reality-text mb-10'>
                        Transform your project dreams into reality
                    </h1 >
                    <p className='story-realty'>Oftentimes, people brimming with confidence don’t have the required funds to give flight to their dreams. Any project, be it big or small, demands considerable financial capital. Without sufficient funding, project success is far from guaranteed. That’s why Ares Investment financially supports those looking for a reliable funding source to kickstart their ventures. We strive to reach as many people as possible, youngsters and grown adults alike. However, we’re very particular about backing our clients financially.</p>
                    <div className="flex justify-center justify-items-center reality-us my-10">
                        <h3>info&#64;ares-investment.com</h3>
                        <h3 className="ml-5">partnership&#64;ares-investment.com</h3>
                    </div>
                    <h2 className='realtiy-pre mb-10'>www.ares-investment.com</h2>
                    <button className='btn-aboutus mt-5'>Read More</button>
                </div>

            </div>
            </div>
    );
};

export default Reality;