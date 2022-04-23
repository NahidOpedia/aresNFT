import React from 'react';
import './Footer.css';
import In from '../../assets/social-media/in.svg';
import Twitter from '../../assets/social-media/twitter.svg';
import Youtube from '../../assets/social-media/youtube.svg';
import Insta from '../../assets/social-media/insta.svg';
import Opensea from '../../assets/social-media/opensea.svg';

import Footerlogo from "../../assets/logo/footer-logo.png";

import nav1 from '../../assets/nav-logo/Group-1.png';
import nav2 from '../../assets/nav-logo/Group-2.png';
import nav3 from '../../assets/nav-logo/Group-3.png';
import nav4 from '../../assets/nav-logo/Group-4.png';
import { Link } from 'react-router-dom';

const Footer = () => {


    // const [moseOver, setmoseOver] = useState(false)

    return (
        <div className="footer-bg">
            <div className='footer mx-auto'>
            {/* <Link to='/'>
                <img src={Logo} className='mx-auto'/>
            </Link> */}
            <div className="footer-nav">
                <img src={Footerlogo} alt="" srcSet="" />
            </div>
            <div className='custom-footer flex justify-between'>
                    <Link to='/aresabout'><img src={nav4} alt="" srcset="" /></Link>
                    <Link to='/aresinvestment'><img src={nav1} alt="" srcset="" /></Link>
                    <Link to='/aresnft'><img src={nav2} alt="" srcset="" /></Link>
                    <Link to='/aresedition'><img src={nav3} alt="" srcset="" /></Link>
            </div>


            <button className="contact-something">
                <h1  className='mt-20 mb-20 footer-contact-1' >CONTACTS</h1>
                <h3 className='email-1'>info&#64;ares-corporation.com</h3>
            </button>
            <div className="contact-something">
                <h1 className='mt-20 mb-20 footer-contact-2'>PARTNERSHIP</h1>
            <h3 className='email-2'>partnership&#64;ares-corporation.com</h3>
            </div>


            <div className="costom-icon md:flex md:justify-evenly sm:block md:mx-80 sm:mx-5 md:mt-10">
                <a href='https://twitter.com/Ares_NFT_' target="_blank">
                    <img src={Twitter} alt="" srcSet="" className='icon'/>
                </a>
                <a href='https://discord.com/invite/BQQDfsFfUW' target="_blank">   
                    <img src={In} alt="" srcSet="" className='icon'/>
                </a>
                <a href="https://www.instagram.com/ares_nft_/" target="_blank">
                    <img src={Insta} alt="" srcSet="" className='icon'/>
                </a>
                <a href="https://opensea.io/Ares_NFT_" target="_blank">    
                    <img src={Opensea} alt="" srcSet="" className='icon'/>
                </a>
                <a href='https://www.youtube.com/' target="_blank">   
                    <img src={Youtube} alt="" srcSet="" className='icon'/>
                </a>
            </div>
            <p className='pt-20 copywrite'>© 2022 ARES MODENA</p>
        </div>
        </div>
    );
};

export default Footer;