import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import AdminCreateUser from '../screens/Employee/AdminCreateUser'
import LeaveCalendar from '../screens/Employee/LeaveCalendar'

import AdminRoute from 'global/utils/auth/adminRoute'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route
        path={`/leave-calendar`}
        element={
          <AdminRoute>
            <LeaveCalendar />
          </AdminRoute>
        }
      />
      <Route
        path={`/admin/create-user`}
        element={
          <AdminRoute>
            <AdminCreateUser />
          </AdminRoute>
        }
      />
    </ReactRoutes>
  )
}
