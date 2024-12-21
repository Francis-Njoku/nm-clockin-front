import React, { useState } from 'react'

import { clentProfileData, employeeInformationDetails } from 'global/data/AppData'

import { Modal } from 'react-bootstrap'

import ClientProfileCard from 'global/__template/components/Clients/ClientProfileCard'
import CurrentClientProject from 'global/__template/components/Clients/CurrentClientProject'

import CurrentTask from 'global/components/Employees/CurrentTask'
import ExperienceCard from 'global/components/Employees/ExperienceCard'
import PersonalInformations from 'global/components/Employees/PersonalInformations'
import PageHeader from 'global/components/__Library/PageHeader'

function EmployeeProfile() {
  const [ismodal, setIsmodal] = useState(false)
  const [modalData, setModalData] = useState('')

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Employee Profile" />
      <div className="row g-3">
        <div className="col-xl-8 col-lg-12 col-md-12">
          <ClientProfileCard designation="Web Developer" details="Employee Id : 00001" />
          <h6 className="fw-bold mb-3 py-3">Current Work Project</h6>
          <div className="teachercourse-list mb-3">
            <div className="row g-3 gy-5 row-deck pt-3">
              {clentProfileData.map((d, i) => {
                return (
                  <div
                    key={'ljsdhl' + i}
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <CurrentClientProject
                      teamImage={d.teamImage}
                      logo={d.logo}
                      logoBg={d.logoBg}
                      title={d.title}
                      sl={d.sl}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row g-3">
            {employeeInformationDetails.map((d, i) => {
              return (
                <div key={'lkshnd' + i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <PersonalInformations
                    information={d.information}
                    title={d.title}
                    onClickEdit={() => {
                      setIsmodal(true)
                      setModalData(d)
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          <CurrentTask />
          <ExperienceCard />
        </div>
      </div>
      <Modal
        centered
        show={ismodal}
        onHide={() => {
          setIsmodal(false)
        }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="deadline-form">
            <form>
              <div className="row g-3 mb-3">
                {modalData
                  ? modalData.information.map((d, i) => {
                      if (i < 2) {
                        return (
                          <div key={'kjsdfhj' + i} className="col">
                            <label className="form-label">{d.title}</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput877"
                              value={d.value}
                            />
                          </div>
                        )
                      }
                      return null
                    })
                  : null}
              </div>
              <div className="row g-3 mb-3">
                {modalData
                  ? modalData.information.map((d, i) => {
                      if (i > 1 && i < 4) {
                        return (
                          <div key={'kjsdfhj' + i} className="col">
                            <label className="form-label">{d.title}</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput877"
                              value={d.value}
                            />
                          </div>
                        )
                      }
                      return null
                    })
                  : null}
              </div>
              <div className="row g-3 mb-3">
                {modalData
                  ? modalData.information.map((d, i) => {
                      if (i > 3) {
                        return (
                          <div key={'kjsdfhj' + i} className="col">
                            <label className="form-label">{d.title}</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput877"
                              value={d.value}
                            />
                          </div>
                        )
                      }
                      return null
                    })
                  : null}
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsmodal(false)
            }}>
            Done
          </button>
          <button type="button" className="btn btn-primary">
            Sent
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EmployeeProfile
