import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
  let isadmin = true
  
  return (
    <div>
      {isadmin ? (
        <Outlet/>
      ):(
        <Navigate to={'/'}></Navigate>
      )}
    </div>
  )
}
