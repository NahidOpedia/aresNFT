import React,{useEffect} from 'react';
import Chat from '../components/Chat/Chat';
import Navbar from '../components/Header/Navbar';
import './Aresinvestment.css'

import Abouticon1 from '../assets/images/about-icon-1.svg';
import Abouticon2 from '../assets/images/about-icon-2.svg';
import Abouticon3 from '../assets/images/about-icon-3.svg';
import Abouticon4 from '../assets/images/about-icon-4.svg';

import InvestmentImg from '../assets/ares-investment/03.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer/Footer';

const Aresinvestment = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div>
            <Navbar/>
                <div className='investbox'>
                    <div className="invest-img" data-aos="fade-right">
                        <img  src={InvestmentImg} alt="" srcSet=""/>
                    </div>
                    <div data-aos="fade-up" className='ares-section-1'>
                        <h1 className='heading1'>In Shazane Nazaraly’s words,</h1>
                            <h1 className='heading2'>“success requires intensity and those who persist are called crazy.”</h1>

                            <p className='pre-invest'>Ever since an early age, Shazane Nazaraly knew that people who had faith and put in the hours almost always succeeded. Despite the challenges that he had to face growing up, he never let the obstacles that life threw at him stop him from fulfilling his true dreams. Shazane Nazaraly knew he had to grow and push through the tough moments in his life, even if he felt he could go no further, he did. Giving up was never an option for him. Those who he looks up to aren’t necessarily moguls handed with a golden spoon at birth, rather, capable and determined individuals who earned every ounce of their power. He focuses on his missions and continues to seize countless opportunities, no matter what.
                            <br/>
                            <br/>
                            Shazane Nazaraly always paid homage to his true inspiration, Ares, a God of War. A God who represents true courage and fight, traits in which he holds very closely to his heart.</p>
                        <h1 className='footer-header'>THUS, ARES CORPORATION WAS BORN</h1>
                    </div>

                    <div className='ares-section-2' data-aos="fade-up">
                        <h1 className='common-header'>OUR VISION</h1>
                                <p className='pre-text-about  text-center'>
                                    Inspired by the power of Ares and eager to bring about revolutionary change of his own, Shazane Nazaraly began brainstorming a venture of his own. Needless to say, he faced countless impediments in his path but stood strong and never compromised his ambition. Soon after, Ares Corporation was born, giving way to further projects that would boost the financial capabilities of everyone involved. Today, Ares Investment pay tribute to a powerful God. Over the years, Shazane Nazaraly has strategically devised Ares Investment into a growth chasing business model able to withstand the test of time.
                                </p>
                    </div>

                    <h1 className='value-header'>OUR VALUE</h1>
                {/* our value section one */}
                <div className='section-value' data-aos="fade-up">
                            <img src={Abouticon1} className='mx-auto' alt="" srcSet="" />
                            <h5 className='vision-heading'>INTEGRITY</h5>
                            <p className='pre-vision-text'>
                            Ares Corporation stays true to its promise of integrity. We’re real, motivated by a passion for growth and community oriented.
                            </p>
                </div>
                {/* our value section two*/}

                                <div className='section-value' data-aos="fade-up">
                            <img src={Abouticon2} className='mx-auto' alt="" srcSet="" />
                            <h5 className='vision-heading'>INNOVATION</h5>
                            <p className='pre-vision-text'>
                            There’s no end to how rapidly this world evolves. Here at Ares Corporation, we leverage the latest innovations to revolutionize the scope of investment. By tapping into powerful digital assets and expanding financial prosperity, we prove to be innovation friendly in every aspect.
                            </p>
                </div>

                {/* our value section three */}
                                <div className='section-value' data-aos="fade-up">
                            <img src={Abouticon3} className='mx-auto' alt="" srcSet="" />
                            <h5 className='vision-heading'>TRANSPARENCY</h5>
                            <p className='pre-vision-text'>
                            Ares Corporation is an open book, we keep things simple and ensure that our community is always in the loop.
                            </p>
                </div>

                {/* our value section fore */}
                                <div className='section-value' data-aos="fade-up">
                            <img src={Abouticon4} className='mx-auto' alt="" srcSet="" />
                            <h5 className='vision-heading'>RELIABILITY</h5>
                            <p className='pre-vision-text'>
                            We’re the kind of organization that’s always there for its community Reliability is our strong forte and we guarantee you won’t ever be disapointed 
                            </p>
                </div>

                
                </div>
            <Footer/>
            <Chat/>
        </div>
    );
};

export default Aresinvestment;