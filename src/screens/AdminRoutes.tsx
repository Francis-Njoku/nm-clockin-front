import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import LeaveCalendar from './Leave/LeaveCalendar'
import AdminCreateUser from './OtherPages/AdminCreateUser'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/leave-calendar`} element={<LeaveCalendar />} />
      <Route path={`/admin/create-user`} element={<AdminCreateUser />} />
    </ReactRoutes>
  )
}
