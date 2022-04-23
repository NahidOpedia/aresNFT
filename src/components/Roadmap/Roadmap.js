import React from 'react';
import './Roadmap.css';
import Globel from '../../assets/images/Globe.png'

const Roadmap = () => {
    return (
        <div className='roadmap'>
            <h1 className='header-road'>OUR ROADMAP</h1>
            <p className='pre-header'>We are here to establish ourselves in the NFTs world.  Our goals will be graduated by the percentage of sales we make. The sale of all our NFTs will allow the total achievement of the objectives mentioned</p>


            <div className="globel">
                <img src={Globel} className="mx-auto" srcSet="" />

                    {/* single section */}
                 <div className='box flex justify-self-center'>
                    <div className='roadmap-card grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>25%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            We will randomly send to 5 people, 5 legendary Ares NFTs, retained from the sale. We will also upload high quality videos onto our YouTube channel.
                        </p>
                    </div>
                    </div>
                </div>
                   {/* single section */}

                     <div className='box box-second flex justify-self-center'>
                    <div className='roadmap-card grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>50%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            Ares Investment website will be created and presented. All our followers will benefit from a preview and a live link available on our YouTube channel.
                        </p>
                    </div>
                    </div>
                </div>
                   {/* single section */}


                   {/* single section */}

                     <div className='box box-third flex justify-self-center'>
                    <div className='roadmap-card grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>70%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            All buyers and supporters will receive exclusive content. Our Legends will be released 313-5, and a game will be put into development with previews available for our community.
                        </p>
                    </div>
                    </div>
                </div>
                   {/* single section */}
                   {/* single section */}

                     <div className='box box-fourth flex justify-self-center'>
                    <div className='roadmap-card grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>80%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            Our website will include a supporter/VIP access. It will give an access to two private discord links, a private marketplace,  games and much more.
                        </p>
                    </div>
                    </div>
                </div>
                   {/* single section */}
                {/* single section */}

                     <div className='box box-fifth flex justify-self-center'>
                    <div className='roadmap-card grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>100%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            Ares Edition and Ares Investment will see the light. Our  project will be shared with our Community. VIP members will be able to become partners in our company.
                        </p>
                    </div>
                    </div>
                </div>
                   {/* single section */}
            </div>

            {/* <div className='box-2 flex justify-self-center '>
                <div className='roadmap-card-2 grid grid-cols-3 gap-4'>
                        <h1 className='count-percent'>50%</h1>
                    <div className='road-content col-span-2'>
                        <p>
                            Ares Investment website will be created and presented. All our followers will benefit from a preview and a live link available on our YouTube channel.
                        </p>
                    </div>
                    </div>
            </div> */}


            <p className='road-text px-80 pt-56'>
                We acted in the shadows and today we are unveiling ourselves. We are the ink of your pen. We are the past, the present and the future at the same time. We are what you cannot understand. You are us and we are you. We are Ares
            </p>
        </div>
    );
};

export default Roadmap;