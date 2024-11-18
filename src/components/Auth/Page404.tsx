import React from 'react'
import { Link } from 'react-router-dom'
import GoogleImg from '../../assets/images/not_found.svg'

function Page404() {
  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            <img src={GoogleImg} className="w240 mb-4" alt="" />
            <h5>OOP! PAGE NOT FOUND</h5>
            <span className="text-light">
              Sorry, the page you're looking for doesn;t exist. if you think something is brlken,
              report a problem.
            </span>
          </div>
          <div className="col-12 text-center">
            <Link
              to={`/hr-dashboard`}
              className="btn btn-lg btn-block btn-light lift text-uppercase">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page404
