import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUsers } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate()

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
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/163314856?v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          setLoading(false);
          navigate("/browse");
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
        console.log(user);
        setLoading(false)
        navigate("/browse")
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
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/NG-en-20240916-TRIFECTA-perspective_67af3080-dbfa-4a8e-80e0-8ed53e5cc6ac_small.jpg' alt='netflix-bg-img'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-[30rem] mt-20 mx-auto shadow-lg p-8 bg-black bg-opacity-80  absolute'>
            <h1 className='text-3xl font-bold text-white mb-[1.5rem]'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input ref={name} type= "text"  placeholder="Full Name" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoComplete='on' required/>)}
            <input ref={email} type= "email"  placeholder="email address" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoComplete='on' required/>
            <input ref={password} type= "password"  placeholder="password" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" required/>
            <p className='text-red-500 mb-4'>{errorMessage}</p>
            <button type="submit" className=" p-4 w-[100%] bg-red-400 rounded-lg text-white font-sans mb-[1.5rem]" title='click  here👆🏿' onClick={handleButtonClick} disabled={loading}>{loading ? "Processing....." : isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-white ml-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?, Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;
