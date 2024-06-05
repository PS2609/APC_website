import React from 'react'
import Card from './teamsCard'
import blankimage from '../images/blank_image.png'
const teams = () => {
    const position = ["", ""]
    return (

        <div className="bg-gradient-to-b from-[#050023] via-[#0E1700] to-[#1B0B7D]  p-5 text-white">
            <div className=" mt-10 pt-10 heading  text-4xl md:text-5xl lg:text-[80px] font-bold text-center ">OUR TEAM</div>
            <div className='bg-gradient-to-r from-[#FFFFFF] via-[#2B2F26] to-[#FFFFFF] w-[80%] mx-auto h-2  m-t'></div>
            <p className=' text-center text-lg md:text-xl m-10'> The Astronomy and Particle Physics Club, originally founded in 20XX, has experienced a remarkable journey filled with notable achievements and challenges. Through the relentless effort and dedication of its members, the club underwent a revitalization in 2023 and is now poised to soar to new heights.</p>
            <div className="advisory">
                <h1 className="text-3xl md:text-4xl text-center py-10 ">ADVISORY (2024-2025)</h1>
                <div className="profiles flex justify-center gap-8 flex-wrap ">
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                </div>
            </div>
            <div className="O.C (2024-2025)">
                <h1 className="text-3xl md:text-4xl text-center py-10 ">O.C (2024-2025)</h1>
                <div className="profiles flex justify-center gap-8 flex-wrap ">
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                </div>
            </div>
            <div className='EDUCATION & OUTREACH'>
                <h1 className="text-3xl md:text-5xl text-center py-10 ">EDUCATION & OUTREACH</h1>
                <div className="cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
            </div>
            <div className='EVENTS'>
                <h1 className="text-4xl md:text-5xl text-center py-10 ">EVENTS</h1>
                <div className="cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
            </div>
            <div className='MAGAZINE & PR'>
                <h1 className="text-4xl md:text-5xl text-center py-10 ">MAGAZINE & PR</h1>
                <div className="cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
                <div className="sub-cordinator">
                    <h1 className="text-3xl md:text-4xl text-center py-10 ">SUB-COORDINATOR</h1>
                    <div className="profiles flex justify-center gap-8 flex-wrap ">
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                        <Card image={blankimage} name={"NAME"} position={"POSITION"} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default teams