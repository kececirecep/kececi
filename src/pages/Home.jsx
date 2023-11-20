import React, { useEffect } from 'react'
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getGithub } from '../redux/dataSlice';

const Home = () => {
  const disPatch = useDispatch()
  const myGithub = useSelector((state) => state.myGithub)
 

  useEffect(() => {
    disPatch(getGithub())
  }, [])



  return (
    <div>
      {myGithub.loading && "fetching data"}
      {myGithub.error && myGithub.error}
      <div className="p-8 bg-[#070a0d] border border-[#314255] rounded-xl">
        <h1 className='text-xl lg:text-4xl font-bold lg:leading-[46px]'>Web Günceme,<br />Hoşgeldin!</h1>
        <p className='text-[15px] lg:text-lg text-gray-400 py-4'>Bu yazıda projelerimle ilgili deneyimlerimi ve başarılarımı paylaşmak istiyorum. Profesyonel kariyerimde çeşitli projelerde yer aldım ve bu projelerde kazandığım deneyimlerle kendimi sürekli geliştirmekteyim.</p>
        <div className="flex items-center gap-x-4 mt-5 text-gray-400 text-[22px]">
          <NavLink to={`https://x.com/${myGithub.data.twitter_username}`} className="hover:text-white transition-colors"><BsTwitter /></NavLink>
          <NavLink to="/" className="hover:text-white transition-colors"><BsGithub /></NavLink>
          <NavLink to="/" className="hover:text-white transition-colors"><BsYoutube /></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home