import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/PNG TRANSPERANT FILE 2.png';
import nav1 from '../../assets/nav-logo/Group-1.png';
import nav2 from '../../assets/nav-logo/Group-2.png';
import nav3 from '../../assets/nav-logo/Group-3.png';
import nav4 from '../../assets/nav-logo/Group-4.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <Link to="/">
            <div className='flex justify-center pt-5'>
                <img src={Logo} height='123' width='626'/>
            </div>
            </Link>
            <div className='flex justify-center container mx-auto' >
                
                <Link to='/aresabout' className='btn-hover'>  
                <div className='font'>
                    <img src={nav4} />
                </div>
                </Link>

                <Link to= "/aresedition" className='btn-hover'>                 
                    <div className='font'>
                        <img src={nav1} />
                    </div> 
                </Link>

                <Link to='/aresnft' className='btn-hover'>
                    <div className='font'>
                    <img src={nav2} />
                    </div>
                </Link>

                <Link to='/aresinvestment' className='btn-hover'>  
                <div className='font'>
                    <img src={nav3} />
                </div>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;