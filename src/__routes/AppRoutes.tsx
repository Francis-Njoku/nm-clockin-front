import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import UserDashboard from '../__template/pages/Dashboard/UserDashboard'
import AttendanceEmployees from '../screens/Employee/AttendanceEmployees'
import EmployeeLeaveRequests from '../screens/Employee/EmployeeLeaveRequests'
import EmployeeProfile from '../screens/Employee/EmployeeProfile'
import LeaveCalendar from '../screens/Employee/LeaveCalendar'
import ManageLeaveRequests from '../screens/Employee/ManageLeaveRequests'
import AdminRoute from '../utils/auth/adminRoute'
import ManagerRoute from '../utils/auth/managerRoute'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/`} element={<UserDashboard />} />
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
    </ReactRoutes>
  )
}
