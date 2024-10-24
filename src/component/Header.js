import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUsers } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUsers())
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid, email, displayName, photoURL} = user
        dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUsers());
        navigate("/")
      }
    });
    // unsubscribe when component unMounts.
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="top-0 right-0 left-0 fixed shadow-lg z-40 flex  justify-between md:justify-between sm:justify-between bg-gray-600  md:flex-row mx-auto md:mx-0">
      <img src={LOGO} alt='logo' />
      {user && <div className='flex'>
        {showGptSearch && <select title='Select your preferred language'className='cursor-pointer md:mt-2 sm:mt-2 md:mb-2 bg-black text-white md:p-2 sm:p-2 md:text-lg sm:text-lg text-sm' onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))
          }
        </select>}
        <button className='text-sm p-1 md:p-2 sm:p-1 mx-4 my-2 md:text-lg sm:text-lg cursor-pointer sm:bg-green-500 md:bg-green-500 bg-blue-600 text-white rounded-lg' title='click here!' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img  className="w-8 md:w-16 sm:w-16 rounded-[50%] md:mr-4 sm:mr-4 mr-2 mt-2 mb-2" src={user.photoURL} alt='profile-photo'/>
        <button onClick={handleSignOut} type='button' className='text-white md:font-bold sm:font-bold text-sm md:text-lg sm:text-lg md:mr-8 sm:mr-8 md:my-auto sm:my-auto  mr-2'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;
