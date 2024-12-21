import React, { useState, useEffect } from 'react'
import profileImg from '../../assets/images/lg/avatar3.jpg'
import makeAPICall from '../../utils/api'
import { message } from 'antd'
import { capitalizeFirstLetterOfEachWord } from '../../utils/helperFunctions'

export default function ClientProfileCard(props) {
  const [profile, setProfile] = useState(0)
  const { designation, details } = props

  function getUserProfile() {
    //setLoading(true);
    return makeAPICall({
      path: '/auth/profile',
      method: 'GET',
      params: null
    })
      .then((res) => {
        setProfile(res)
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
    <div className="card teacher-card mb-3">
      <div className="card-body d-flex teacher-fulldeatil">
        <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 w220 pe-4 text-center">
          <a href="#!">
            <img
              src={profileImg}
              alt=""
              className="avatar xl rounded-circle img-thumbnail shadow-sm"
            />
          </a>
          <div className="about-info d-flex align-items-center justify-content-center flex-column mt-3">
            <h6 className="fw-bold d-block fs-6 mb-0">{designation ? designation : 'CEO'}</h6>
            <span className="small text-muted">{details ? details : 'CLIENT ID : PXL-0001'}</span>
          </div>
        </div>
        <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 w-100 ps-4">
          <h6 className="fw-bold d-block fs-6 mb-0 mt-2">
            {capitalizeFirstLetterOfEachWord(profile?.data?.group?.name)}
          </h6>
          <span className="fw-bold small-11 mb-0 mt-1 py-1 text-muted">
            {capitalizeFirstLetterOfEachWord(profile?.data?.firstName)}{' '}
            {capitalizeFirstLetterOfEachWord(profile?.data?.lastName)}
          </span>
          {/*<p className="mt-2 small">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</p> */}
          <div className="row g-2 pt-2">
            <div className="col-xl-5">
              <div className="d-flex align-items-center">
                <i className="icofont-ui-touch-phone"></i>
                <span className="small ms-2">{profile?.data?.phone} </span>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="d-flex align-items-center">
                <i className="icofont-email"></i>
                <span className="small ms-2">{profile?.data?.email}</span>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="d-flex align-items-center">
                <i className="icofont-birthday-cake"></i>
                <span className="small ms-2">{profile?.data?.joined}</span>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="d-flex align-items-center">
                <i className="icofont-address-book"></i>
                <span className="small ms-2">
                  {profile?.data?.group.map((groupItem, index) => (
                    <div key={index}>{capitalizeFirstLetterOfEachWord(groupItem.group.name)}</div>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//export default ClientProfileCard;
