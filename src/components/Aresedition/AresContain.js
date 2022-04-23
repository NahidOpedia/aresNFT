import React,{useEffect} from 'react';
import ArewsLogo from '../../assets/logo/editon-ares-logo.png'
import './AresContain.css';

import CarSports1 from '../../assets/Ares-addition/sport-car-smoke .png'
import CarSports2 from '../../assets/Ares-addition/sport-car-smoke -2.png'
import AreseditionImg1 from '../../assets/Ares-addition/car-engine-with-oil-lubricant (1) 1.png';
import AresFooterImg from '../../assets/Ares-addition/black-modern-sport-car 1.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

const AresContain = () => {

   useEffect(() => {
    
    AOS.init({duration:3000});

}, [])


    return (
        <div className='nft-contain'>

           <div className='contain'> 
               <h1 className='header-top'>A GROUND BREAKING LUXURY CAR</h1>
               <h2 className='header-subtitle'>How Shazane Nazaraly’s idea created a ground breaking luxury car</h2>
               <p className='details'>Growing up, Shazane Nazaraly has seen his fair share of sports cars. However, his idea of luxury has always been unconventional. Cognizant of his personal successes and an ever evolving ambition to make great things happen, the founder has followed in the footsteps of Ares, the God of War himself.  This has largely  influenced his  vision about luxury  vehicles that not only mesmerize people at first glance but also make amazing first impressions when driven on the road.</p>
            </div>
            
            <div className='black-bg'>

            <div className=''>
               <img src={ArewsLogo} alt="" srcSet="" className='editon-logo'/>
               <h2 className='auto-header'>AN AUTOMOTIVE FORCE TO BE RECOKNED WITH</h2>

               <div className='auto-car-container'> 
               {/* section 1 auto car container */}

                  <div className='car-section-1 flex justify-between'>
                     <img src={CarSports1} data-aos="fade-right" alt="" srcSet="" className='car-img-1'/>
                     <p data-aos="fade-left">
                        Ever since its inception in the past two years, Ares Edition has been our star project. Our team has extensively worked on Ares Edition to expand opportunities across the spectrum. Collaborating with his father has allowed Shazane Nazaraly to venture forth into the automotive field and explore new avenues guided by three decades worth of his father’s knowledge. Regardless, 
                        
                        <br/><br/>


                        Shazane Nazaraly has never been swayed by the traditional vehicles available on the market. Why? Because owning a vehicle isn’t just about getting to a destination, 
                     </p>
                  </div> 

               {/* section 1 auto car container */}

               {/* section 2 auto car container */}
                  <div className='car-section-2 flex justify-between'>
                     <p data-aos="fade-left">
                        
                        it’s about the journey that a car makes possible and enjoying the ride. Today’s markets flaunt a mismatched variety of luxury cars and sports vehicles, all of which have
                        their flaws. Either something is missing in the appearance department or the engine isn’t powerful enough. As someone who understands the true value of things, 

                        <br/><br/>
                        Shazane Nazaraly knows the  importance of  power which is why Ares Edition is  the kind of luxury car that would impress even the toughest of critics. After all, it was his innate power that led him to
                        where he is today regardless of the challenges life threw his way. 
                     </p>
                        <img src={CarSports2} data-aos="fade-right" alt="" srcSet="" className='car-img-2'/>
                  </div> 


               {/* section 2 auto car container */}
               </div>
            </div>

            <div className='contain-2' data-aos="fade-up"> 
                  <h1>A WHOLE NEW EXPERIENCE</h1>
                  <h2>Why Ares Edition brings a whole new experience to the table</h2>
                  <p className='details'>Unlike other cars, Ares Edition combines the best of sports and luxury all in one vehicle. From the chassis to the engine, every aspect is refined to the most basic detail, rendering the whole into an unforgettable masterpiece. Rather than being gentle on the eyes, Ares Edition will exert its dominance coupled with exceptionally powerful automotive capabilities. The car integrates premium quality materials as well as cutting edge technologies within functionality and design. But that’s jus t the  tip of the  iceberg. The  highlight, otherwise known as the Ultra  sport mode, is a transformative feature that will take your breath away.</p>
            </div>

            <div className="aresedition-img-1" data-aos="fade-left">
               <img src={AreseditionImg1} alt="" srcSet="" />
            </div>

            <div className='contain-3' data-aos="fade-up"> 
               <h1>FOUNDER’S JOURNEY</h1>
               <h2>How Ares Edition is a direct expression of the founder’s journey</h2>
               <p className='details'>Good cars are sturdy, whereas, great cars are the epitome of powerful. Shazane Nazaraly draws from his own experiences to visualise a dream car that’s resilient in every aspect. The  founder wants to reflect  his ambitious  side through  Ares Edition and showcase why there’s light at the end of every tunnel.</p>
            </div>

            <div className='contain-4' data-aos="fade-up"> 
               <h1 className='contain-4-header'>GOD OF SUSTAINABILITY</h1>
               <p className='details'>Sports cars get a bad rap and sometimes, it’s justified. As the environment grapples with the consequences of manmade processes, it is incumbent upon us to reduce our  carbon  footprint as much as possible. Verily,  we’ve envisioned the creation  of stellar products that respect the every tunnel.</p>
            </div>

            
            <div className='contain-5' data-aos="fade-up"> 
               <h1 className='contain-5-header'>WHAT’S MORE?</h1>
               <p className='details'>We’re providing the Ares Edition package to everyone who wants a taste. So, bring your vehicle to see the Ares spirit in action and bask in the glory of true luxury.</p>
            </div>
            <div className="car-footer-img" data-aos="fade-right">
               <img src={AresFooterImg} alt="" srcSet="" />
            </div>
         </div>

        </div>
    );
};

export default AresContain;