import React from 'react'

import InterviewImg from 'global/assets/images/interview.svg'

function HignlighterCard() {
  return (
    <div className="card bg-primary">
      <div className="card-body row">
        <div className="col">
          <span className="avatar lg rounded-circle d-flex align-items-center justify-content-center bg-white text-center">
            <i className="icofont-file-text fs-5"></i>
          </span>
          <h1 className="fw-bold mb-0 mt-3 text-white">1546</h1>
          <span className="text-white">Applications</span>
        </div>
        <div className="col">
          <img className="img-fluid" src={InterviewImg} alt="interview" />
        </div>
      </div>
    </div>
  )
}

export default HignlighterCard
