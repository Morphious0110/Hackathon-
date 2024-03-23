import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className=' bg-slate-200'>
        <div className=' flex justify-between p-5 pr-8 max-w-6xl text-center m-auto'>
         <Link to={"/"}>
                <h1 className=' font-bold'>Auth app</h1>
         </Link>

         <ul className=' flex gap-4'>
            <Link to={"/about"}>
                 <li>About</li>
            </Link>
            <Link to={"profile"}>
                <li>Profile</li>
            </Link>
            <Link to={"signin"} >
                <li>Sign in</li>
            </Link>
         </ul>
         </div>
    </div>
  )
}

export default Header