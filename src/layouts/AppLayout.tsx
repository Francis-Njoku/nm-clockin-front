import React from 'react'
import { useLocation } from 'react-router-dom'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import PageHeader1 from '../partials/PageHeader1'

import PrivateRoute from '../auth/privateRoute'

import AppRoutes from '../screens/AppRoutes'
import TemplateRoutes from '../screens/TemplateRoutes'
import ErrorPages from '../screens/ErrorPages'

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
