import React from 'react';
import './Planning.css';

import Shop1 from '../../assets/dream-img/shop-1.png' 
import Shop2 from '../../assets/dream-img/shop-2.png' 
import Shop3 from '../../assets/dream-img/shop-3.png' 


import Business from '../../assets/gif/88670-businessman-animation.png';
import Mate from '../../assets/gif/86168-meta.png';
import Vip from '../../assets/gif/77093-vip-scan-find.png';

const Planing = () => {
    return (
        <div className='plan-bg'>
            <h1 className='plan-title'>Why Become an Ares member?</h1>
            <h6 className='plan-subtitle mt-10 mb-20'>To upgrade to VIP status, you must invest in a legendary/ultimate NFT</h6>
            <div className='md:flex sm:block mx-44 my-60 '>

                <img src={Shop1} alt="" srcSet="" className='mx-auto shop'/>
                <img src={Shop2} alt="" srcSet="" className='mx-auto'/>
                <img src={Shop3} alt="" srcSet="" className='mx-auto'/>
            </div>


            <div className='costom-grid pt-36 pb-24 grid grid-cols-3 mx-40 '>

                <div className='plan-card-bg'>
                       {/* <button className='button-card-1'>Members</button> */}
                       <img src={Business} alt="" srcSet="" className='gif-file'/>
                        <div className='level'>
                            <h2 className='text-level'>Members</h2>
                        </div>
                       <div className='mt-73'>

                           <ul className='list-item'>

                            <li className='fex mx-10 mt-8'><p className='item-text ml-8'>Members receive exclusive gifts upon purchasing an NFT</p></li>

                            <li className=' mx-10 mt-8'><span className='item-text ml-8'>All members can access the website & the online store</span></li>

                            <li className=' mx-10 mt-8'><span className='item-text ml-8'>Members are eligible for discounted items available for store purchases</span></li>

                            <li className=' mx-10 mt-8'><span className='item-text ml-8'>Members avail exclusive access to the Ares Members private Discord group</span></li>

                           </ul>
                            {/* <button className='option-btn'>Select Plan</button> */}
                       </div>
                </div>


                <div className='plan-card-bg-2'>
                       {/* <button className='button-card-1'>Members</button> */}
                       <img src={Mate} alt="" srcSet="" className='gif-file'/>
                        <div className='level'>
                            <h2 className='text-level-2'>Metaverse</h2>
                        </div>
                       <div className='mt-73'>

                           <ul className='list-item'>

                            <li className=' mx-10 mt-8'><p className='item-text ml-8'>Ares NFTs have been escpecially designed for future play in the metaverse</p></li>

                            <li className=' mx-10 mt-8 item-text'>We have carefully chosen all of our unique individual parts in order for our buyers to truely have full experience of our NFTs.</li>

                            <li className=' mx-10 mt-8 item-text text-center'>From acc</li>

                           </ul>
                            {/* <button className='option-btn'>Select Plan</button> */}
                       

                   </div>
                </div>
                



                <div className='plan-card-bg-3'>
                       {/* <button className='button-card-1'>Members</button> */}
                       <img src={Vip} alt="" srcSet="" className='gif-file'/>
                        <div className='level'>
                            <h2 className='text-level-3'>VIP Members</h2>
                        </div>
                       <div className='mt-73'>

                           <ul className='list-item'>

                            <li className='mx-10 mt-8 item-text'><p className='item-text ml-8'>VIP members can access our exclusive website with bigger and better opportunities: Aresvip-nft.com</p></li>

                            <li className=' mx-10 mt-8 item-text'>VIP members can purchase exclusive gifts with higher rarity</li>

                            <li className='flex mx-10 mt-8 item-text'>VIP members can materialize their NFTs’ Certificate of Authenticity</li>

                            <li className=' mx-10 mt-8 item-text'>VIP members avail exclusive copyright certification</li>

                           </ul>
                            {/* <button className='option-btn'>Select Plan</button> */}
                       

                   </div>
                </div>
                {/* <div className='plan-card-bg mx-auto'>
                    <div className='level'>
                       <button className='button-card-2'>VIP Members</button>

                           <ul className='mt-20 list-item'>

                            <li className='flex mx-10'><img src={IconCorrect} alt="" srcSet="" className='self-start mt-2'/><p className='item-text ml-8 '>VIP members can access our exclusive website with bigger and better opportunities: Aresvip-nft.com</p></li>

                            <li className='flex mx-10 mt-8'><img src={IconCorrect} alt="" srcSet="" className='self-start mt-2'/><span className='item-text ml-8'>VIP members can purchase exclusive gifts with higher rarity</span></li>

                            <li className='flex mx-10 mt-8'><img src={IconCorrect} alt="" srcSet="" className='self-start mt-2'/><span className='item-text ml-8'>VIP members can materialize their NFTs’ Certificate of Authenticity</span></li>

                            <li className='flex mx-10 mt-8'><img src={IconCorrect} alt="" srcSet="" className='self-start mt-2'/><span className='item-text ml-8'>VIP members avail exclusive copyright certification</span></li>

                           </ul> 

                           <button className='option-btn-2'>Select Plan</button> 
                   </div> 
                </div> */}
            </div>

        </div>
    );
};

export default Planing;