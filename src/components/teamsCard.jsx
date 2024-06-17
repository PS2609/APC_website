import React from 'react'
const teamsCard = (props) => {
    return (
        <> 
            <div className="card w-[200px] h-[255px] bg-[#00181B] rounded-3xl pt-3  ">
                <div className="img mx-auto object-cover">
                    <img src={props.image} alt="" className='w-[170px] h-[190px]' />
                </div>
                <div className="text mt-auto mb-2 text-center text-lg  md:text-[20px]">
                    <div className="name ">{props.name}</div>
                </div>
                
            </div>
        </>
    )
}

export default teamsCard