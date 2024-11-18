import React, { useState, useEffect } from 'react'
import ClientProfileCard from '../../components/Clients/ClientProfileCard'
import PageHeader from '../../partials/PageHeader'
//import CurrentClientProject from "../../components/Clients/CurrentClientProject";
//import { clentProfileData, employeeInformationDetails } from "../../components/Data/AppData";
//import PersonalInformations from "../../components/Employees/PersonalInformations";
//import CurrentTask from "../../components/Employees/CurrentTask";
//import ExperienceCard from "../../components/Employees/ExperienceCard";
import { Modal } from 'react-bootstrap'
import makeAPICall from '../../utils/apiUtils'
import { message } from 'antd'
import { capitalizeFirstLetterOfEachWord } from '../../utils/helperFunctions'

export default function EmployeeProfile() {
  const [ismodal, setIsmodal] = useState(false)
  const [modalData, setModalData] = useState('')
  const [profile, setProfile] = useState(0)

  function getUserProfile() {
    //setLoading(true);
    return makeAPICall({
      path: '/auth/profile',
      method: 'GET',
      params: null
    })
      .then((res) => {
        setProfile(res)
        console.log(res)
      })
      .catch((err) => {
        //setLoading(false);
        message.error(err.message, 5)
      })
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Employee Profile" />
      <div className="row g-3">
        <div className="col-xl-8 col-lg-12 col-md-12">
          <ClientProfileCard
            designation={capitalizeFirstLetterOfEachWord(profile?.data?.department?.name)}
            details={`Employee Id : ${profile?.data?.name}`}
          />
          <h6 className="fw-bold mb-3 py-3">Current Work Project</h6>
          {/*
                    <div className="teachercourse-list mb-3">
                        <div className="row g-3 gy-5 pt-3 row-deck">
                            {
                                clentProfileData.map((d, i) => {
                                    return <div key={"ljsdhl" + i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="row g-3">
                        {
                            employeeInformationDetails.map((d, i) => {
                                return <div key={"lkshnd" + i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                    <PersonalInformations information={d.information} title={d.title}
                                        onClickEdit={() => { setIsmodal(true); setModalData(d); }}
                                    />
                                </div>
                            })
                        }
                    </div>*/}
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          {/*<CurrentTask />
                    <ExperienceCard /> */}
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

//export default EmployeeProfile;
