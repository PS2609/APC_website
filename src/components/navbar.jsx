import React from 'react'
import b from "../images/AP_LOGO.png"



function Navbar() {
  const navitems = (<>
    <li style={{ fontSize: "20px" }}><a>Home</a></li>
    <li style={{ fontSize: "20px" }}><a>Blogs</a></li>
    <li style={{ fontSize: "20px" }}><a>Resources</a></li>
    <li style={{ fontSize: "20px" }}><a>Team</a></li>
    <li style={{ fontSize: "20px" }}><a>Gallery</a></li>
  </>);
  return (
    <>
      <div className='max-w-screen-2x1 container md:px-20 px-2 fixed top-0 left-0 right-0 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 fontSize: 20px shadow bg-base-100 rounded-box w-52 mr-auto">
                {navitems}

              </ul>
            </div>
            <div>
              <div className='order-1 w-full md:w-1/2 flex items-center px-0'>
                <img src={b} alt="" className='w-16 h-16 mr-4' />
                <span className="text-white text-lg font-bold font-Monda mt-1">Astronomy & Particle Physics Club</span>

              </div></div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="mr-auto menu menu-horizontal px-7 text-semibold font-Monteserrat " >
              {navitems}

            </ul>
          </div>
          <div className="navbar-end">

          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
