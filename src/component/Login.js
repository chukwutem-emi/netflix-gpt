import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header />
        <div>
            <img src='https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico' alt='icon' />
        </div>
        <form className='w-[30rem] my-40 mx-auto shadow-lg p-8 bg-black bg-opacity-80 absolute z-40'>
            <h1 className='text-3xl font-bold text-white mb-[1.5rem]'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type= "text"  placeholder="Full Name" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoComplete='on' autoFocus required/>)}
            <input type= "email"  placeholder="email address" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoComplete='on' autoFocus required/>
            <input type= "password"  placeholder="password" className="p-4 w-[100%] bg-gray-700 rounded-lg mb-[1.5rem] text-white" autoFocus required/>
            <button type="submit" className=" p-4 w-[100%] bg-red-400 rounded-lg text-white font-sans mb-[1.5rem]" title='click to sign in'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-white ml-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?, Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;
