import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Screens/AdminDashboard'
import ErrorPage from '../Screens/ErrorPage'
import InstituteDashboard from '../Screens/InstituteDashboard'
import StudentDashboard from '../Screens/StudentDashboard'
import Login from '../Screens/Login'
import RegistrationForm from '../Screens/RegistrationForm'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>            
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="admin-dashboard/*" element={<AdminDashboard />} />
            <Route path="student-dashboard/*" element={<StudentDashboard />} />
            <Route path="institute-dashboard/*" element={<InstituteDashboard />} />
            <Route path="registration-form" element={<RegistrationForm />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter;