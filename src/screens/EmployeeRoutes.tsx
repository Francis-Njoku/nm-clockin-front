import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import UserDashboard from './Dashboard/UserDashboard'
import AttendanceEmployees from './Employee/AttendanceEmployees'
import EmployeeProfile from './Employee/EmployeeProfile'
import EmployeeLeaveRequests from './Leave/EmployeeLeaveRequests'
import Projects from './Projects/Projects'
import AdminCreateUser from './OtherPages/AdminCreateUser'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/`} element={<UserDashboard />} />
      <Route path={`/projects`} element={<Projects />} />
      <Route path={`/members-profile`} element={<EmployeeProfile />} />
      <Route path={`/attendance-summary`} element={<UserDashboard />} />
      <Route path={`/attendance-employees`} element={<AttendanceEmployees />} />
      <Route path={`/my-leave-requests`} element={<EmployeeLeaveRequests />} />
      <Route path={`/admin/create-user`} element={<AdminCreateUser />} />
    </ReactRoutes>
  )
}
