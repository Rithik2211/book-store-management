import React, { FC, ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface AdminRouteProps{
    children : ReactNode
}

const AdminRoute : FC<AdminRouteProps> = ({children}) => {
  const token = localStorage.getItem('token')
  if(!token){
    return <Navigate to={"/admin"}/>
  }
  return children ? children : <Outlet />
}

export default AdminRoute;