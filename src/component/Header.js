import React from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="top-0 right-0 left-0 fixed shadow-lg z-40 flex justify-between bg-gray-400">
      <img src='https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico' alt='logo' />
      {user && <div className='flex'>
        <img  className="w-16 rounded-[50%] mr-4" src={user.photoURL} alt='profile-photo'/>
        <button onClick={handleSignOut} type='button' className='text-white font-bold mr-8 mt-8'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;
