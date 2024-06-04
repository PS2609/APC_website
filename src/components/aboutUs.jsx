import React from 'react'
import aboutusimg1 from '../images/about_us1.png'
import aboutusimg2 from '../images/about_us2.png'
import joinsvg from '../images/join.svg'

const aboutUs = () => {
    return (
        <div className="aboutUs p-10 bg-black text-white   ">
            <div className="heading  text-center font-semibold text-[36px] my-7 ">
                ABOUT US
                <div className='bg-gradient-to-r from-[#7D80BF] to-[#81A456]   h-1 '>
                </div>
            </div>

            <div className="content">
                <div className="font-medium text-[16px] md:text-[22px] px-2  ">The Astronomy and Particle Physics Club at IIT Patna fosters curiosity and exploration in the vast realms of the cosmos and subatomic particles. Through discussions, experiments, and projects, members delve into celestial mysteries and fundamental physics. It's a community-driven by a passion for discovery, welcoming all to join in unraveling the universe's secrets.</div>
                <div className="vibrantbelonging flex items-center my-5 flex-col md:flex-row">
                    <div className="img md:w-1/2 flex  ">
                        <div className="p-1 bg-gradient-to-r from-[#FFFFFF] to-[#CC5252]">
                            <img width={400} height={300} src={aboutusimg1} />
                        </div>
                    </div>
                    <div class="text md:w-1/2  ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center ">Our Vibrant <span className=' bg-gradient-to-r from-[#FFFFFF] via-[#B1BDE8] to-[#3453C2] text-transparent bg-clip-text '>Beginnings</span> </div>
                        <div className="content text-[16px] md:text-[22px] px-1">The Astronomy and Particle Physics Club at IIT Patna fosters curiosity and exploration in the vast realms of the cosmos and subatomic particles. Through discussions, experiments, and projects, members delve into celestial mysteries and fundamental physics. It's a community-driven by a passion for discovery, welcoming all to join in unraveling the universe's secrets.</div>
                    </div>
                </div>
                <div className="whoAreWe flex items-center my-5 flex-col-reverse md:flex-row">

                    <div class="text md:w-1/2  ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">What We <span className=' bg-gradient-to-r from-[#FFFFFF] via-[#B1BDE8] to-[#3453C2] text-transparent bg-clip-text '>Are?</span> </div>
                        <div className="content text-[20px] md:text-[24px]">The Astronomy and Particle Physics Club at IIT Patna fosters curiosity and exploration in the vast realms of the cosmos and subatomic particles. Through discussions, experiments, and projects, members delve into celestial mysteries and fundamental physics. It's a community-driven by a passion for discovery, welcoming all to join in unraveling the universe's secrets.</div>
                    </div>
                    <div className="img md:w-1/2 flex justify-end  ">
                        <div className="p-1 bg-gradient-to-r from-[#FFFFFF] to-[#CC5252]">
                            <img width={400} height={300} src={aboutusimg2} />
                        </div>
                    </div>
                </div>
                <div className="joinTheAventure my-3">
                    <div className="title text-[30px] md:text-[36px] my-3 text-center"><span className='bg-gradient-to-r from-[#FFFFFF] via-[#B1BDE8] to-[#3453C2] text-transparent bg-clip-text'>Join</span> the Adventure</div>
                    <div className="content text-[16px] md:text-[22px]">
                        Whether you're a seasoned astronomer, a particle physics enthusiast, or simply intrigued by the mysteries of the cosmos, there's a place for you in our Astronomy and Particle Physics Club at IIT Patna. Join us in pushing the boundaries of knowledge, infusing passion, curiosity, and innovation into every exploration. Experience the thrill of discovery as we chart new frontiers and unravel the secrets of the universe. Come, embark on this exciting journey with us, where enthusiasm for discovery meets the infinite possibilities of the cosmos.
                    </div>
                </div>
            </div>
            <div className="joinCommunity flex justify-center ">
                <button className='w-[47.94] bg-white text-black px-5 py-3 h-[45] gap-2 items-center flex rounded-3xl' ><img src={joinsvg} width={20} />Join Community</button>
            </div>
        </div>
    )
}

export default aboutUs