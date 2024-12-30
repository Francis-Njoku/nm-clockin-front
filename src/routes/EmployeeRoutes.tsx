import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import UserDashboard from '../__template/pages/Dashboard/UserDashboard'
import AttendanceEmployees from '../screens/Employee/AttendanceEmployees'
import EmployeeLeaveRequests from '../screens/Employee/EmployeeLeaveRequests'
import EmployeeProfile from '../screens/Employee/EmployeeProfile'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/`} element={<UserDashboard />} />
      <Route path={`/members-profile`} element={<EmployeeProfile />} />
      <Route path={`/attendance-summary`} element={<UserDashboard />} />
      <Route path={`/attendance-employees`} element={<AttendanceEmployees />} />
      <Route path={`/my-leave-requests`} element={<EmployeeLeaveRequests />} />
    </ReactRoutes>
  )
}