import React, { useState, useEffect } from 'react'
import b from "../images/AP_LOGO.png"



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navitems = (<>
    <li className="m-0 p-1 text-[18px] font-semibold border-transparent hover:border-white border-b-4 transition-all w-1/2 duration-100"><a className="" href='#'>Home</a></li>
    <li className="m-0 p-1 text-[18px] font-semibold border-transparent hover:border-white border-b-4 transition-all w-1/2 duration-100"><a className="" href='#'>Blogs</a></li>
    <li className="m-0 p-1 text-[18px] font-semibold border-transparent hover:border-white border-b-4 transition-all w-1/2 duration-100"><a className="" href='#'>Resources</a></li>
    <li className="m-0 p-1 text-[18px] font-semibold border-transparent hover:border-white border-b-4 transition-all w-1/2 duration-100"><a className="" href='#'>Team</a></li>
    <li className="m-0 p-1 text-[18px] font-semibold border-transparent hover:border-white border-b-4 transition-all w-1/2 duration-100"><a className="" href='#'>Gallery</a></li>
  </>);
  return (
    <>
      <div className='px-2 md:px-5 py-0 md:py-3 fixed top-0 left-0 right-0' style={{ backgroundColor: isScrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)' }}>
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 fontSize: 20px shadow bg-base-100 rounded-box w-52 mr-auto">
                {navitems}
              </ul>
            </div>
            <div>
              <div className='order-1 w-full md:w-1/2 flex items-center px-0'>
                <img src={b} alt="" className='w-16 h-16 mx-[2vw]' />
                <div className='text-white text-xs md:text-base font-Monda'>
                  <span className=" font-bold tracking-normal md:tracking-wider lg:tracking-widest text-nowrap">ASTRONOMY & PARTICLE PHYSICS CLUB</span>
                  <p className='tracking-wide md:tracking-wider lg:tracking-widest md:text-nowrap'>Indian Institute of Technology Patna (IITP)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="right-0 hidden lg:flex">
              <ul className="text-semibold font-Monteserrat flex-nowrap flex flex-row gap-[2vw]" >
                {navitems}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
