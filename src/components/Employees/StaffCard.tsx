import React from 'react'
import lgAvatar2 from 'global/assets/images/lg/avatar2.jpg'

function StaffCard({ role, name }) {
  return (
    <div className="card teacher-card">
      <div className="card-body d-flex">
        <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 w220 pe-4 text-center">
          <img
            src={lgAvatar2}
            alt=""
            className="avatar xl rounded-circle img-thumbnail shadow-sm"
          />
        </div>
        <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 w-100 flex flex-col justify-between ps-4">
          <div className="">
            <h6 className="fw-bold d-block fs-6 mb-0 mt-2">{name}</h6>
            <span className="light-info-bg rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1 px-2 py-1">
              {role}
            </span>
          </div>

          {/* <div className="d-flex align-items-center ct-btn-set flex-wrap">
            <a href="tasks" className="btn btn-dark btn-sm mts-1 me-2">
              <i className="icofont-plus-circle fs-6 me-2"></i>Add Task
            </a>
            <a href="members-profile" className="btn btn-dark btn-sm mt-1">
              <i className="icofont-invisible fs-6 me-2"></i>Profile
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default StaffCard
