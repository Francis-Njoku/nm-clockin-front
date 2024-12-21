import React from 'react'

import { Link } from 'react-router-dom'

import GoogleImg from 'global/assets/images/not_found.svg'

function Page404() {
  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            <img src={GoogleImg} className="w240 mb-4" alt="" />
            <h5>OOP! UNAUTHORISED</h5>
            <span className="text-light">
              Sorry, you are not authorised to view the page you're looking for. if you think
              something is broken, contact your admin.
            </span>
          </div>
          <div className="col-12 text-center">
            <Link to={`/`} className="btn btn-lg btn-block btn-light lift text-uppercase">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page404
