import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Error from './Error';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />,
            errorElement:<Error />
        },
        {
            path:"/browse",
            element:<Browse />,
            errorElement:<Error />
        },
    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
