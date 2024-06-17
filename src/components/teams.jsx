import React from 'react'
import Card from './teamsCard'
import bgimage from '../images/background1.png'
import blankimage from '../images/blank_image.png'
import PrakharGupta from '../images/TeamMembers/Prakhar Gupta1.jpg'
import HarshLoomba from '../images/TeamMembers/Harsh Loomba.png'
import AmoyAshesh from '../images/TeamMembers/Amoy Ashesh.jpg'
import Awantika from '../images/TeamMembers/Awantika.png'
import Khushal_Yadav from "../images/TeamMembers/Khushal Yadav(OC).png"
import Harsh_Dahiya from "../images/TeamMembers/Harsh_Dahiya(Education and Outreach).png"
import  Subham_Prasad_Gouda from "../images/TeamMembers/Subham Prasad Gouda (PR & Magazine).jpg"
import  Suprajit  from "../images/TeamMembers/Suprajit (PR&Magazine).jpg"
import  Utkarsh_Arya  from "../images/TeamMembers/Utkarsh Arya.jpg"
import  Priyanshi_Sharma from "../images/TeamMembers/Priyanshi_Sharma.jpg"


const teams = () => {
    return (

        <div className=" font-Monda bg-gradient-to-b from-[#050023] via-[#0E1700] to-[#1B0B7D]  p-5 text-white" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className=" mt-10 pt-10 heading   text-[36px]  font-bold text-center ">OUR TEAM</div>
            <div className='bg-gradient-to-r from-[#FFFFFF] via-[#2B2F26] to-[#FFFFFF] w-[80%] sm:w-[50%]  md:w-[30%] mx-auto h-1  m-t'></div>
            <p className=' text-center text-lg md:text-xl m-10 font-Montserrat'> The Astronomy and Particle Physics Club, originally founded in 20XX, has experienced a remarkable journey filled with notable achievements and challenges. Through the relentless effort and dedication of its members, the club underwent a revitalization in 2023 and is now poised to soar to new heights.</p>
            <div className="advisory">
                <h1 className="text-[36px]  text-center py-10 ">ADVISORY (2024-2025)</h1>
                <div className="profiles flex justify-center gap-8 flex-wrap ">
                    <Card image={PrakharGupta} name={"Prakhar Gupta"} />
                    <Card image={HarshLoomba} name={"Harsh Loomba"} />
                    <Card image={AmoyAshesh} name={"Amoy Ashesh"} />
                    <Card image={Awantika} name={"Awantika"} />
                </div>
            </div>
            <div className="O.C (2024-2025)">
                <h1 className="text-[36px] text-center py-10 ">O.C (2024-2025)</h1>
                <div className="profiles flex justify-center  gap-8 flex-wrap ">
                    <Card image={Khushal_Yadav} name={"Khushal Yadav"} />
                </div>
            </div>
            <div className='EDUCATION & OUTREACH'>
                <h1 className="text-[36px] text-center py-10 ">EDUCATION & OUTREACH</h1>
                <div className="cordinator">
                    <h1 className="text-[36px] text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={Harsh_Dahiya} name={"Harsh Dahiya"} />
                        
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-[36px] text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={"src/images/TeamMembers/Ashmit Verma (E&O-Subcoord).jpg"} name={"Ashmit Verma"} />
                        <Card image={"src/images/TeamMembers/Aditya_Prakash_Gupta(Edu-Outreach).jpg"} name={"Aditya Prakash Gupta"} />
                        <Card image={"src/images/TeamMembers/shivang rayat education and outreach.jpg"} name={"Shivang Rayat"} />
                        
                    </div>
                </div>
            </div>
            <div className='EVENTS'>
                <h1 className="text-[36px] text-center py-10 ">EVENTS</h1>
                <div className="cordinator">
                    <h1 className="text-[36px] text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={Priyanshi_Sharma} name={"Priyanshi Sharma"} />
                        <Card image={Utkarsh_Arya} name={"Utkarsh Arya"} />
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-[36px] text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={"src/images/TeamMembers/Mayank_Singh_Events.jpg"} name={"Mayank Singh"} />
                        <Card image={"src/images/TeamMembers/Parul Shrivastava ,  Events Committee.png"} name={"Parul Shrivastava"} />
                        <Card image={"src/images/TeamMembers/vivek kumar events.png"} name={"Vivek Kumar"} />
                        
                    </div>
                </div>
            </div>
            <div className='MAGAZINE & PR'>
                <h1 className="text-[36px] text-center py-10 ">MAGAZINE & PR</h1>
                <div className="cordinator">
                    <h1 className="text-[36px] text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={Subham_Prasad_Gouda} name={"Subham Prasad Gouda"} />
                        <Card image={Suprajit} name={"Suprajit"} />
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-[36px] text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={"src/images/TeamMembers/Vinod_Singh_Rathore(PR&M).jpg"} name={"Vinod Singh Rathore"} />
                        <Card image={"src/images/TeamMembers/Rahul_jilowa.jpg"} name={"Rahul Jilowa"} />
                        <Card image={"src/images/TeamMembers/Supriya.jpg"} name={"Supriya Karnati"} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default teams