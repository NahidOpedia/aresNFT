import React from 'react';
import './Aboutus.css';
import AboutImg from '../../assets/images/aboutus.png'
const Aboutus = () => {
    return (
        <div className='about-bg'>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-0 md:mx-32 sm:mx-2 font-color">
                <div>
                    <img src={AboutImg} className='index-1 aboutimg' width='698' height='604'/>
                </div>
                <div>
                    <h1 className='font-color about-text mb-10'>
                        ABOUT US
                    </h1 >
                    <p className='font-color story-pre'>Spearheaded by Shazane Nazaraly, Ares Corporation set its roots in 2019 as the brainchild of a creative founder who turns ideas into reality. Ever since day one, the goal has been plain and simple – to prove that investing in one’s ambitions can bear limitless success. Ares Corporation seeks to amplify the dreams of the community by reinforcing the belief that nothing is impossible. The world is filled with hidden opportunities waiting to be seized.</p>
                    <div className="flex justify-items-center justify-center  contact-us my-10">
                        <h3>info&#64;ares-corporation.com</h3>
                        <h3 className='ml-10 email-res'>partnership&#64;ares-corporation.com</h3>
                    </div>
                    <button className='btn-aboutus mt-3'>Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Aboutus;