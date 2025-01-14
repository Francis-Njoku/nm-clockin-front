import React from 'react'

import { useLocation } from 'react-router-dom'

import Sidebar from '../areas/Sidebar'
import Header from '../headers/Header'

import PrivateRoute from 'global/utils/auth/privateRoute'

import AdminRoutes from 'global/__routes/AdminRoutes'
import EmployeeRoutes from 'global/__routes/EmployeeRoutes'
import ManagerRoutes from 'global/__routes/ManagerRoutes'
import TemplateRoutes from 'global/__routes/TemplateRoutes'

import PageHeader1 from 'global/components/__Library/PageHeader1'

const AppLayout = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const activePath = pathSegments.length > 1 ? `/${pathSegments[pathSegments.length - 1]}` : '/'

  return (
    <div id="mytask-layout" className="theme-indigo">
      <PrivateRoute>
        <Sidebar activekey={activePath} />
        <div className="main px-lg-4 px-md-4">
          {activePath !== '/chat-app' ? (
            activePath === '/documentation' ? (
              <PageHeader1 />
            ) : (
              <Header />
            )
          ) : (
            ''
          )}
          <div className="body d-flex py-lg-3 py-md-2">
            <EmployeeRoutes />
            <ManagerRoutes />
            <AdminRoutes />
            <TemplateRoutes />
          </div>
        </div>
      </PrivateRoute>
    </div>
  )
}

export default AppLayout
