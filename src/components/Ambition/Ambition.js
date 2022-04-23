import React from 'react';
import AmbitionImg from '../../assets/images/real-02.png';
import './Ambition.css'
const Ambition = () => {
    return (
            <div className="ambition-bg">
                <div className="ambition-container">
                <div className='container-ambit'>
                    <h1 className=' abition-text'>
                        How Shazane Nazaraly’s idea created a ground breaking luxury car 
                    </h1 >
                    <p className='ambition-story'>Growing up, Shazane Nazaraly has seen his fair share of sports cars. However, his idea of luxury has always been unconventional. Cognizant of his personal successes and an ever-evolving ambition to make great things happen, the founder has followed in the footsteps of Ares, the God of War himself. This has largely influenced his vision about luxury vehicles that not only mesmerize people at first glance but also make amazing first impressions when driven on the road.</p>
                    <div className="flex justify-between ambition-us my-10">
                        <h3>info&#64;ares-edition.com</h3>
                        <h3>partnership&#64;ares-edition.com</h3>
                    </div>
                    <h1 className='reality-web text-white mb-10'>www.ares-edition.com</h1>
                    <button className='btn-ambition mt-5'>Read More</button>
                </div>
                <div className='ambition-img'>
                    <img src={AmbitionImg} className='index-1'/>
                </div>
            </div>
            </div>
    );
};

export default Ambition;