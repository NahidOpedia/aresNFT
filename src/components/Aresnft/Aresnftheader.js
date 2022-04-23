import React,{useEffect} from 'react';
import Navbar from '../Header/Navbar';
import './Aresnftheader.css'
import Footer from '../Footer/Footer'
import Planing from '../Planing/Planing';
import Roadmap from '../Roadmap/Roadmap';

// Ares section images
import nft1 from '../../assets/aresNFT/01.png';
import nft2 from '../../assets/aresNFT/02.png';
import nft3 from '../../assets/aresNFT/03.png';
import nft4 from '../../assets/aresNFT/04.png';
import nft5 from '../../assets/aresNFT/05.png';

import AresNft from '../../assets/logo/ares-nft-title.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Aresnftheader = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])
    return (
        <>
            <Navbar/>

            <div className='ares-container'>
                        {/* ARES NFT */}
                <div className='grid grid-cols-2 gap-8'>
                <div className='contain' data-aos="fade-right"> 
                    <div className='header-top-1'>
                        <img src={AresNft} alt="" srcset="" className='AresNft'/>
                    </div>
                    <p className='details'>Ares NFT is a non-fungible token enriched with wholly unique properties that make it one of a kind. Due to its non-interchangeable nature, Ares NFT touts itself as an unconventional investment with limitless potential for holders. Operating under Ares Corporation,  our NFTs are expected to   form the  foundation for projects  including Ares Investment and others in. the future pipeline</p>
                </div>
                
                <div className='flex justify-items-center ' data-aos="fade-left">
                    <img src={nft1} alt="" srcSet="" className='nft-ares-img'/>
                </div>
            </div>
        {/* ARES NFT */}
        
        {/* THE STORY BEHIND */}
            <div className='grid grid-cols-2 gap-8 custom-grid'>
                <div className='flex justify-items-center' data-aos="fade-right">
                    <img src={nft2} alt="" srcSet="" className='nft-ares-img-2'/>
                </div>
                <div className='contain-1' data-aos="fade-left"> 
                    <h1 className='header-top-2'>THE STORY BEHIND</h1>
                    <p className='details'>Our NFTs pay ode to the God Ares, his resurrection as well as the glory of his reign centuries after his death. Those who have heard the tales of his era know  that he was a  power to  be reckoned  with.  A true warrior who bent the knee to  no one, ruled with resilience  and gave new  meaning  to  myth  altogether .  Needless  to  say ,  our  NFTs  will perfectly represent the fear inspired by Ares.</p>
            </div>
            </div>

        {/* THE STORY BEHIND */}

        {/* THE MOST UNIQUE RARE NFT */}
            <div className='grid grid-cols-2 gap-8 custom-grid'>
                <div className='contain-2' data-aos="fade-right"> 
                    <h1 className='header-top-3'>THE MOST UNIQUE and RARE NFT</h1>
                    <p className='details-3'>A total of 7,313 unique, rare and collectable NFTs tied to the Ethereum blockchain will be introduced to the market. People will be able to buy, bid on or offer each of these NFTs. Moreso, each purchase will be accompanied by compelling rewards. Across the visual front, our NFTs will feature multiple variations in terms of background, effect, helmet, armour and thus, overall style. NFT enthusiasts will be able to view each of these at 4 angles, each within different levels:  rare, super rare, legendary and ultimate. Every buyer will receive  exclusive gifts determined by the exact rarity of the NFT they purchase. “</p>
                </div>
                
                <div className='flex justify-items-center' data-aos="fade-left">
                    <img src={nft3} alt="" srcSet="" className="nft-img-3"/>
                </div>
            </div>
            {/* THE MOST UNIQUE RARE NFT */}


            {/* VERIFIABLE AUTHENTICITY */}
            <div className='grid grid-cols-2 gap-5 custom-grid-2'>
                <div className='flex justify-items-center' data-aos="fade-right">
                    <img src={nft4} alt="" srcSet="" className="nft-img-4"/>
                </div>
                <div className='contain-3' data-aos="fade-left"> 
                    <h1 className='header-top-2'>VERIFIABLE AUTHENTICITY</h1>
                    <p className='details-4'>Not sure whether the NFTs are authentic and worth your time? We’ve attached a certificate of legitimacy within the smart contract of each NFT. In fact, half of the total supply is set to be backed by irrefutable copyright  claims.  The  buyer  can  also  materialize  the  certificate  of authenticity, as well as the copyrights on our site.</p>
            </div>
            </div>
            {/* VERIFIABLE AUTHENTICITY */}

        {/* VERIFIABLE AUTHENTICITY */}
        <div className='grid grid-cols-2 gap-5 custom-grid-3'>
                <div className='contain-5' data-aos="fade-right"> 
                    <h1 className='header-top-4'>NFT MINING</h1>
                    <p className='details-5'>Ares NFTs stay true to the legacy of their inspiration and grow exponentially. So, stay tuned
                    for when we announce the exact upcoming minting date. Ares NFTs will abide by the ERC721 protocol based on the Ethereum  blockchain. Rest assured, you will be made aware  of all minting-related information via our discord channel, social  media and our websites
                    prior to the date of launch.</p>
                </div>
                
                <div className='flex justify-items-center' data-aos="fade-left">
                    <img src={nft5} alt="" srcSet=""className="nft-img-5"/>
                </div>
            </div>
            {/* VERIFIABLE AUTHENTICITY */}
            </div>

            <Roadmap/>
            <Planing/>
            <Footer />
        </>
    );
};

export default Aresnftheader;