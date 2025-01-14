import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import UserDashboard from '../__template/pages/Dashboard/UserDashboard'
import AttendanceEmployees from '../screens/Employee/AttendanceEmployees'
import EmployeeLeaveRequests from '../screens/Employee/EmployeeLeaveRequests'
import EmployeeProfile from '../screens/Employee/EmployeeProfile'
import ManageLeaveRequests from '../screens/Employee/ManageLeaveRequests'

import ChangePassword from 'global/components/Auth/ChangePassword'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/`} element={<UserDashboard />} />
      <Route path={`/change-password`} element={<ChangePassword />} />
      <Route path={`/members-profile`} element={<EmployeeProfile />} />
      <Route path={`/attendance-summary`} element={<UserDashboard />} />
      <Route path={`/attendance-employees`} element={<AttendanceEmployees />} />
      <Route path={`/my-leave-requests`} element={<EmployeeLeaveRequests />} />
      <Route path={`/manage-leave-requests`} element={<ManageLeaveRequests />} />
    </ReactRoutes>
  )
}
