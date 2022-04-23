import React, {useEffect} from 'react';
import './Dream.css';
import firstperson from '../../assets/cardimg/01.png'
import secoundperson from '../../assets/cardimg/02.png'
import thierdperson from '../../assets/cardimg/03.png'

import title1 from '../../assets/cardimg/title-1.png'
import title2 from '../../assets/cardimg/title-2.png'
import title3 from '../../assets/cardimg/title-3.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Dream = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])
    return (
        <div className='dream-bg'>
            <div className='cos-Container'>
                {/* <h1 className='header1'>TRANSFORM</h1> */}
                <h1 className='header2'>OUR PROJECTS</h1>
            </div>

            
            <div className='p-4 mx-auto'>

            <div className="grid grid-cols-3  mx-28 mt-20">

                <div  className=''>
                    <img data-aos="fade-up" src={firstperson} className='CardImg' height="317" width="440" alt="" srcSet="" />
                    <img src={title1} alt="" srcSet="" className='title'/>
                </div>

                <div >
                    <img data-aos="fade-up" src={secoundperson} className='CardImg' alt="" srcSet="" />
                    <img src={title2} alt="" srcSet="" className='title'/>
                </div>

                <div >
                    <img data-aos="fade-up" src={thierdperson} className='CardImg' alt="" srcSet="" />
                    <img src={title3} alt="" srcSet="" className='title'/>
                </div>
            </div>
            </div>

                {/* <div className='flex justify-center p-6'>
                    <div className='icons'>
                        <img src={leftArrow}  className='p-3'/>
                    </div>
                    <div className='p-3'>
                       <img src={rightArrow} className='icons'/> 
                    </div>

                </div> */}

                
            <div className='pt-24'>
                {/* <Roadmap /> */}
            </div>
        </div>
    );
};

export default Dream;