import React from 'react'
const teamsCard = (props) => {
    return (
        <>
            <div className="card w-[300px] h-[350px] bg-[#00181B] rounded-3xl p-5  ">
                <div className="img mx-auto object-cover">
                    <img src={props.image} alt="" className='w-[170px] h-[190px]' />
                </div>
                <div className="text my-auto text-center text-xl  md:text-3xl">
                    <div className="name ">{props.name}</div>
                    {/* <div className="name">{props.position}</div> */}
                </div>
                
            </div>
        </>
    )
}

export default teamsCard