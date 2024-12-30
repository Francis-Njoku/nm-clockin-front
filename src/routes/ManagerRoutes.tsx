import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import ManageLeaveRequests from '../screens/Employee/ManageLeaveRequests'
import ManagerRoute from '../utils/auth/managerRoute'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route
        path={`/manage-leave-requests`}
        element={
          <ManagerRoute>
            <ManageLeaveRequests />
          </ManagerRoute>
        }
      />
    </ReactRoutes>
  )
}
