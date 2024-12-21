import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import AdminRoute from '../auth/adminRoute'
import ManagerRoute from '../auth/managerRoute'

import UserDashboard from './Dashboard/UserDashboard'
import AttendanceEmployees from './Employee/AttendanceEmployees'
import EmployeeProfile from './Employee/EmployeeProfile'
import LeaveCalendar from './Leave/LeaveCalendar'
import ManageLeaveRequests from './Leave/ManageLeaveRequests'
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
      <Route
        path={`/manage-leave-requests`}
        element={
          <ManagerRoute>
            <ManageLeaveRequests />
          </ManagerRoute>
        }
      />
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
