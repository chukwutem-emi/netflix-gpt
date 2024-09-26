import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUsers } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
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
  return (
    <div className="top-0 right-0 left-0 fixed shadow-lg z-40 flex justify-between bg-gray-400">
      <img src={LOGO} alt='logo' />
      {user && <div className='flex'>
        <img  className="w-16 rounded-[50%] mr-4" src={user.photoURL} alt='profile-photo'/>
        <button onClick={handleSignOut} type='button' className='text-white font-bold mr-8 mt-8'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;
