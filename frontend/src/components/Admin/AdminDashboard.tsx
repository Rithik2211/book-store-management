import React from 'react'
import { AuthProvider } from '../../context/AuthContext';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
import AdminSideNav from './AdminSideNav';

const AdminDashboard = () => {
  return (
    <AuthProvider>
        <AdminNav />
        <AdminSideNav />
        <main className='w-full py-6 font-primary'>
          <Outlet />
        </main>
      </AuthProvider>
  )
}

export default AdminDashboard;