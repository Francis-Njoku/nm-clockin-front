import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import AdminCreateUser from '../__template/pages/OtherPages/AdminCreateUser'
import LeaveCalendar from '../screens/Employee/LeaveCalendar'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/leave-calendar`} element={<LeaveCalendar />} />
      <Route path={`/admin/create-user`} element={<AdminCreateUser />} />
    </ReactRoutes>
  )
}
