import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Searchbox from './Searchbox'

const Navbar : React.FC =  () => {
  return (
     <div className="navbar bg-base-100 py-5">
      <div className="container mx-auto px-4">
         <div className="flex justify-between items-center w-full">
            <div className="hidden sm:block">
               <Link className='btn btn-ghost text-xl' to={'/'}>THEMovieDB</Link>
            </div>
            {/* <div className=""> */}
                  <Searchbox />
            {/* </div> */}
         </div>
      </div>
   </div>
  )
}


export default memo(Navbar)