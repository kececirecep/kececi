import React from 'react'
import Logo from '../images/profile.jpeg'
import { NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => { 
  const myGithub = useSelector((state)=>state.myGithub)
 
 

    return (
        <div className='flex justify-between items-center py-8'>
            <Link to="/">
                <div className="flex items-center gap-4">
                    <span><img src={myGithub.data.avatar_url} alt="" className='w-[96px] h-[96px] rounded-full border-2 border-[rgb(51, 51, 51)]' /></span>
                    <div className="text">
                        <h1 className='text-[26px] font-semibold'>{myGithub.data.name}</h1>
                        <h6 className='text-[16px] text-[#9ca3af] font-medium'>{myGithub.data.bio}</h6>
                    </div>
                </div>
            </Link>
            <nav>
                <ul className='flex gap-4 text-[16px]'> 
                    <li><NavLink to="/projects" className="text-base py-1.5 rounded-md px-4">Projeler</NavLink></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Header