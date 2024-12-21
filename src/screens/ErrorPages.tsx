import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import Page405 from 'global/components/Auth/Page405'

export default function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path={`/405`} element={<Page405 />} />
    </ReactRoutes>
  )
}
