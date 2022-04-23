import React,{useEffect} from 'react';
import './BindAres.css';
import bindimg from '../../assets/images/aresking.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const BindAres = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div className='bind-bg'>
            <div className="grid grid-cols-3 gap-4 pl-36 mb-14 font-color">

                <div data-aos="fade-right" className='col-span-2 grid-1st'>
                    <h1 className='font-color unique'>
                        7313 UNIQUE AND <br/> RARE NFTs
                    </h1>
                    <h1 className='font-color story'>
                        The Story Behind Ares NFT
                    </h1 >
                    <p className='font-color story-pre'>Our NFTs pay ode to the God Ares, his resurrection as well as the glory of his reign centuries after his death. Those who have heard the tales of his era know that he was a power to be reckoned with. A true warrior who bent the knee to no one, ruled with resilience and gave new meaning to myth altogether. Needless to say, our NFTs will perfectly represent the fear inspired by Ares.</p>
                    <div className="flex justify-center reality-us my-10">
                        <h3>support&#64;ares-nft.com</h3>
                        <h3 className='ml-10 costom-mail'>partnership&#64;ares-nft.com</h3>
                    </div>
                    <h2 className='story-nft mb-10'>www.ares-nft.com</h2>
                    <button className='btn-aboutus mt-5'>Read More</button>
                </div>
                
                <div data-aos="fade-left" className='col-span-1'>
                    <img src={bindimg} className='index-1 storyimg'/>
                </div>
            </div>
        </div>
    );
};

export default BindAres;