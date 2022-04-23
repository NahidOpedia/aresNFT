import React from 'react';
import './Card.css';
import Img1 from '../../assets/Ares-addition/01.png';
import Img2 from '../../assets/Ares-addition/02.png';
import Img3 from '../../assets/Ares-addition/03.png';
import Img4 from '../../assets/Ares-addition/04.png';
import Img5 from '../../assets/Ares-addition/05.png';
import Img6 from '../../assets/Ares-addition/06.png';
const Card = () => {
    return (
        <div className='grid grid-cols-6 gap-1 grid-nft'>

            <div className='col-span-4'>

                <div className='grid grid-cols-3 gap-6 mt-40'>

                    <div className="card-border-wrap">
                        <div className="card-border mx-10">
                            <div className='img-border'>
                                <img src={Img1} alt=""  srcSet="" width="217" height="195"/>
                                <h2 className="card-title">McLAREN</h2>
                            </div>
                        </div>
                    </div>


                <div className="card-border-wrap">
                    <div className="card-border mx-10">
                        <div className='img-border'>
                            <img src={Img2} alt=""  srcSet="" width="217" height="195"/>
                            <h2 className="card-title">AVENTADOR</h2>
                        </div>
                    </div>
                </div>

                <div className="card-border-wrap">
                    <div className="card-border mx-10">
                        <div className='img-border'>
                            <img src={Img3} alt=""  srcSet="" width="217" height="195"/>
                            <h2 className="card-title">SCAGLIETTI</h2>
                        </div>
                    </div>
                </div>

                <div className="card-border-wrap">
                    <div className="card-border mx-10">
                        <div className='img-border'>
                            <img src={Img4} alt=""  srcSet="" width="217" height="195"/>
                            <h2 className="card-title">ITALIA GT3</h2>
                        </div>
                    </div>
                </div>

                <div className="card-border-wrap">
                    <div className="card-border mx-10">
                        <div className='img-border'>
                            <img src={Img5} alt=""  srcSet="" width="217" height="195"/>
                            <h2 className="card-title">HUAYRA</h2>
                        </div>
                    </div>
                </div>

                <div className="card-border-wrap">
                    <div className="card-border mx-10">
                        <div className='img-border'>
                            <img src={Img6} alt=""  srcSet="" width="217" height="195"/>
                            <h2 className="card-title">CAMARO 1st GEN</h2>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            <div className='col-span-2 per-card'>
                Ever since its inception in the past two years, Ares Edition has been our star project. Our
                team has extensively worked on Ares Edition to expand opportunities across the spectrum. Collaborating with his father has allowed Shazane Nazaraly to venture forth into the automotive field and explore new avenues guided by three decades worth of his father’s knowledge. Regardless, Shazane Nazaraly has never been swayed by the traditional vehicles available on the market. Why? Because owning a vehicle isn’t just about getting to a destination,
                <br/><br/> it’s about the journey that a car makes possible and enjoying the ride. Today’s markets flaunt a mismatched variety of luxury cars and sports vehicles, all of which have
                their flaws. Either something is missing in the appearance department or the engine isn’t powerful enough. As someone who understands the true value of things, Shazane Nazaraly knows the  importance of  power which is why Ares Edition is  the kind of luxury car that would impress even the toughest of critics. After all, it was his innate power that led him to
                where he is today regardless of the challenges life threw his way.
            </div>
        </div>
    );
};

export default Card;