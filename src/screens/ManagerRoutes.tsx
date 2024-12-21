import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import UserDashboard from './Dashboard/UserDashboard'
import AttendanceEmployees from './Employee/AttendanceEmployees'
import EmployeeProfile from './Employee/EmployeeProfile'
import ManageLeaveRequests from './Leave/ManageLeaveRequests'
import EmployeeLeaveRequests from './Leave/EmployeeLeaveRequests'
import Projects from './Projects/Projects'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/projects`} element={<Projects />} />
      <Route path={`/members-profile`} element={<EmployeeProfile />} />
      <Route path={`/attendance-summary`} element={<UserDashboard />} />
      <Route path={`/attendance-employees`} element={<AttendanceEmployees />} />
      <Route path={`/manage-leave-requests`} element={<ManageLeaveRequests />} />
      <Route path={`/my-leave-requests`} element={<EmployeeLeaveRequests />} />
    </ReactRoutes>
  )
}
