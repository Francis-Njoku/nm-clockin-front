import React from 'react'

import Avatar2 from 'global/assets/images/lg/avatar2.jpg'
import Avatar3 from 'global/assets/images/lg/avatar3.jpg'
import Avatar5 from 'global/assets/images/lg/avatar5.jpg'
import Avatar8 from 'global/assets/images/lg/avatar8.jpg'
import Avatar9 from 'global/assets/images/lg/avatar9.jpg'
import Avatar12 from 'global/assets/images/lg/avatar12.jpg'

function TopPerformers() {
  return (
    <div className="card light-danger-bg">
      <div className="card-header d-flex justify-content-between border-bottom-0 bg-transparent py-3">
        <h6 className="fw-bold mb-0">Top Perfrormers</h6>
      </div>
      <div className="card-body">
        <div className="row g-3 align-items-center">
          <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
            <p>
              You have 140 <span className="fw-bold">influencers </span> in your company.
            </p>
            <div className="d-flex justify-content-between text-center">
              <div className="">
                <h3 className="fw-bold">350</h3>
                <span className="small">New Task</span>
              </div>
              <div className="">
                <h3 className="fw-bold">130</h3>
                <span className="small">Task Completed</span>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
            <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar2}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">Luke Short</h6>
                    <span className="mb-2 text-muted">@Short</span>
                    <h4 className="fw-bold fs-3 text-primary">80%</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar5}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">John Hard</h6>
                    <span className="mb-2 text-muted">@rdacre</span>
                    <h4 className="fw-bold fs-3 text-primary">70%</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar8}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">Paul Rees</h6>
                    <span className="mb-2 text-muted">@Rees</span>
                    <h4 className="fw-bold fs-3 text-primary">77%</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar9}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">Rachel Parr</h6>
                    <span className="mb-2 text-muted">@Parr</span>
                    <h4 className="fw-bold fs-3 text-primary">85%</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar12}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">Eric Reid</h6>
                    <span className="mb-2 text-muted">@Eric</span>
                    <h4 className="fw-bold fs-3 text-primary">95%</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <img
                      className="avatar lg rounded-circle img-thumbnail mx-auto"
                      src={Avatar3}
                      alt="profile"
                    />
                    <h6 className="fw-bold small-14 my-2">Jan Ince</h6>
                    <span className="mb-2 text-muted">@Ince</span>
                    <h4 className="fw-bold fs-3 text-primary">97%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPerformers
