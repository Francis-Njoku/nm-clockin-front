import React from 'react'

import { useLocation } from 'react-router-dom'

import AppRoutes from 'global/routes/AppRoutes'
import ErrorPages from 'global/routes/ErrorPages'
import TemplateRoutes from 'global/routes/TemplateRoutes'
import PrivateRoute from 'global/routes/auth/privateRoute'

import PageHeader1 from 'global/components/__Library/PageHeader1'

import Sidebar from '../areas/Sidebar'
import Header from '../headers/Header'

const AppLayout = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const activePath = pathSegments.length > 1 ? `/${pathSegments[pathSegments.length - 1]}` : '/'

  return (
    <div id="mytask-layout" className="theme-indigo">
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
          <PrivateRoute>
            <AppRoutes />
            <ErrorPages />
            <TemplateRoutes />
          </PrivateRoute>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
