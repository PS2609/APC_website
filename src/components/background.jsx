import React from 'react'
import bgimage from '../images/background1.png'

function Background(){
    return (
        <>
        <div className="bg-img bg-cover h-screen w-full" style={{ backgroundImage: `url(${bgimage})`}}></div></>
    )
}
export default Background
