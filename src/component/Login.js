import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUsers } from '../utils/userSlice';
import { NETFLIX_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); 

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null)

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)
    if(message) return;

    if (!isSignInForm) {
      //Signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL:USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          setLoading(false);
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        setLoading(false);
      });

    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        setLoading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
        setLoading(false);
      });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
        <Header />
        <div className='absolute inset-0'>
        <img className='w-full h-full object-cover' src={NETFLIX_IMG} alt='netflix-bg-img'/>
        </div>
        <div className='w-[30rem] my-0 mx-auto xl:my-0 lg:my-0 md:my-0 sm:my-0 xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto'>
          <form onSubmit={(e) => e.preventDefault()} className='xl:w-[30rem] lg:w-[30rem] md:w-[30rem] sm:w-[30rem] my-28 mx-[0.3rem] shadow-lg p-8 bg-black xl:bg-black lg:bg-black md:bg-black sm:bg-black bg-opacity-80 xl:bg-opacity-80 lg:bg-opacity-80 md:bg-opacity-80 sm:bg-opacity-80 fixed'>
              <h1 className='text-base xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl font-bold xl:font-bold lg:font-bold md:font-bold sm:font-bold text-white xl:text-white lg:text-white md:text-white sm:text-white mb-[1.5rem] xl:mb-[1.5rem] lg:mb-[1.5rem] md:mb-[1.5rem] sm:mb-[1.5rem]'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm && (<input ref={name} type= "text"  placeholder="Full Name" className="w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white p-2.5 xl:p-4 lg:p-4 md:p-4 sm:p-4" autoComplete='on' required/>)}
              <input ref={email} type= "email"  placeholder="email address" className="p-2.5 xl:p-4 lg:p-4 md:p-4 sm:p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoComplete='on' required/>
              <input ref={password} type= "password"  placeholder="password" className="p-2.5 xl:p-4 lg:p-4 md:p-4 sm:p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" required/>
              <p className='text-red-500 mb-4'>{errorMessage}</p>
              <button type="submit" className=" p-2.5 xl:p-4 lg:p-4 md:p-4 sm:p-4 w-[100%] bg-red-400 rounded-lg text-white font-sans mb-[1.5rem]" title='click  here👆🏿' onClick={handleButtonClick} disabled={loading}>{loading ? "Processing....." : isSignInForm ? "Sign In" : "Sign Up"}</button>
              <p className='text-white ml-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?, Sign In Now"}</p>
          </form>
        </div>
    </div>
  )
}

export default Login;
