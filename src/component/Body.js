import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUsers, removeUsers } from '../utils/userSlice';
import Error from './Error';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />,
        },
        {
            path:"/browse",
            element:<Browse />,
        },
        {
          path:"/error",
          element:<Error />
        }
    ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid, email, displayName, photoURL} = user
        dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUsers());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
