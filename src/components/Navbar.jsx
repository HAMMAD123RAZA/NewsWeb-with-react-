import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
const [click,setClick]=useState(false)
const handleClick=()=>{
  setClick(!click)
}

  return (
    <>
      <div className="flex justify-between items-center py-5 bg-gray-300   ">
      <div className="logo font-bold  ">
        myLogo
      </div>
      <div className="md:flex gap-5 hidden ">
        <Link className=' hover:border-b-2 border-black hover:underline font-bold' to="/">Home</Link>
        <Link className='  font-bold hover:border-b-2 border-black' to="/Sports">Sports</Link>
        <Link className='  font-bold hover:border-b-2 border-black' to="/Politics">Politics</Link>
        <Link className='  font-bold hover:border-b-2 border-black' to="/Tech">Tech</Link>
<Link className='  font-bold hover:border-b-2 border-black' to='/Weather' >Weather</Link>
      </div>
      <div className="btn hidden md:block font-bold hover:border-b-2 border-black ">
        <button>signUp</button>
    
      </div>
      <div className='md:hidden block' >
    <button type='button' className='font-bold hover:border-b-2 border-black ' onClick={handleClick} >{click?<FaXmark />:<FaBars />}</button>
      </div>

      </div>
    {click && (
                <div className="relative top-0 left-0   bg-white text-center flex flex-col md:hidden ">
                  {/* <div className="flex self-end py-4">
                  <button type='button' onClick={handleClick}>{click?<FaXmark />:<FaBars />}</button>
                  </div> */}
        <Link className=' py-3 font-bold hover:border-b-2 border-black'  to="/">Home</Link>
        <Link className=' py-3 font-bold hover:border-b-2 border-black'  to="/Sports">Sports</Link>
        <Link className=' py-3 font-bold hover:border-b-2 border-black'  to="/Politics">Politics</Link>
        <Link className=' py-3 font-bold hover:border-b-2 border-black'  to="/Tech">Tech</Link>
        <Link className=' py-3 font-bold hover:border-b-2 border-black' to='/Weather'  >Weather</Link>

      <div>
        <button className='w-full max-w-sm   px-5 py-4 bg-blue-600 text-white hover:bg-white hover:text-blue-500 font-bold border-2 rounded-md border-blue-600' >SignIn</button>
      </div>

      </div>
    )}
    
    </>
  )
}

export default Navbar
