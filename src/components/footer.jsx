import React from 'react'

const footer = ({handleClickMenu}) => {
    return (
        <div className='bg-black px-5 py-2 text-white  ' id='footer'>
            <div className='md:flex w-full justify-between  '>
                <div className="logo font-Monda font-bold">
                    <div className="img w-[100px] mx-auto">
                    <img className='flex justify-center' src="src/images/AP_LOGO.png" alt="" width={80} />
                    </div>
                    <div className="md:text-lg text-md  text-center font-Monda  my-5">APC IIT PATNA</div>
                </div>
                <div className="social flex-col mx-auto sm:w-[50vw] md:w-auto justify-center items-center ">
                    <div className="social flex justify-center gap-10 sm:justify-normal sm:w-[50vw] md:w-auto  mx-auto items-center my-5">
                        <a href="https://www.instagram.com/apclub.iitp/" target="_blank"><img className="bg-white rounded-full w-[30px] sm:w-[40px] " src="src/images/instagram.png" alt=""  /></a>
                        <a href="https://www.linkedin.com/company/ap-club-iitp/" target='_blank'><img className="bg-white  md:p-2 rounded-full w-[30px] sm:w-[40px]" src="src/images/linkedin.jpg" alt="" width={50} height={50} /></a>
                        <a href="mailto:Apclub.iitp@gmail.com" target='_blank'><img className="bg-white p-1 md:p-2 rounded-full  w-[30px] sm:w-[40px] " src="src/images/email.jpg" alt="" width={50} /></a>
                        <a href="https://discord.com/invite/ZB5NuxTM" target='_blank'><img className="bg-white p-1 md:p-2 rounded-full  w-[30px] sm:w-[40px] " src="src\images\discord.jpg" alt="" width={50} /></a>
                    </div>
                    <div className="pages mb-5 md:mb-0 text-[12px] sm:text-[14px] md:text-[16px] sm:w-[50vw] md:w-auto  mx-auto">
                        <ul className='flex justify-around  sm:justify-normal sm:gap-5'>
                            <li className='cursor-pointer' onClick={()=>{handleClickMenu("home")}}>Home</li>
                            <li className='cursor-pointer' onClick={()=>{handleClickMenu("blog")}}>Blogs</li>
                            <li className='cursor-pointer'onClick={()=>{handleClickMenu("resources")}}>Resources</li>
                            <li className='cursor-pointer' onClick={()=>{handleClickMenu("gallery")}}>Gallery</li>
                            <li className='cursor-pointer' onClick={()=>{handleClickMenu("team")}}>Our Team</li>
                        </ul>
                    </div>
                </div>
                <div className="map flex justify-center mt-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530688.6424962407!2d84.15222747917461!3d25.533765947985103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1719668734870!5m2!1sen!2sin" className=' sm:w-[150px]   h-[100px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="copyright text-center font-Montserrat  text-sm md:pt-0 pt-2">
            © Copyrights Reserved by Astronomy and Particle Physics Club, IIT Patna.
            </div>
        </div>
    )
}
export default footer
