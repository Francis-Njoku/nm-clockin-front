import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import Page404 from 'global/components/Auth/Page404'
import PasswordReset from 'global/components/Auth/PasswordReset'
import SignIn from 'global/components/Auth/SignIn'
import Signup from 'global/components/Auth/Signup'
import StepAuthentication from 'global/components/Auth/StepAuthentication'

import LeftSide from '../areas/LeftSide'

const AuthIndex = () => {
  return (
    <div className="main p-xl-5 p-2 py-3">
      <div className="body d-flex p-xl-5 p-0">
        <div className="container-xxl">
          <div className="row g-0">
            <LeftSide />
            <ReactRoutes>
              <Route path={`/sign-in`} element={<SignIn />} />
              <Route path={`/sign-up`} element={<Signup />} />
              <Route path={`/password-reset`} element={<PasswordReset />} />
              <Route path={`/2-step-authentication`} element={<StepAuthentication />} />
              <Route path={`/page-404`} element={<Page404 />} />
            </ReactRoutes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthIndex
