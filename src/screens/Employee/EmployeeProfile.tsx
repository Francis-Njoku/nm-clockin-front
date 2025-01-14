import useAuthRedux from 'global/store/auth/useAuthRedux'

import { capitalizeFirstLetterOfEachWord } from 'global/utils/helperFunctions'

import PageHeader from 'global/components/__Library/PageHeader'

import profileImg from 'global/assets/images/lg/avatar3.jpg'

export default function EmployeeProfile() {
  const {
    profile: { data: profile }
  } = useAuthRedux()

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Employee Profile" />
      <div className="row g-3">
        <div className="col-xl-8 col-lg-12 col-md-12">
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
                  <h6 className="fw-bold d-block fs-6 mb-0">
                    {profile?.role ? profile?.role : 'Staff'}
                  </h6>
                  <span className="small text-muted">{`Employee Id : ${profile?.name}`}</span>
                </div>
              </div>
              <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 w-100 ps-4">
                <h6 className="fw-bold d-block fs-6 mb-0 mt-2">
                  {capitalizeFirstLetterOfEachWord(profile?.group?.name)}
                </h6>
                <span className="fw-bold small-11 mb-0 mt-1 py-1 text-muted">
                  {capitalizeFirstLetterOfEachWord(profile?.firstName)}{' '}
                  {capitalizeFirstLetterOfEachWord(profile?.lastName)}
                </span>
                {/*<p className="mt-2 small">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</p> */}
                <div className="row g-2 pt-2">
                  <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                      <i className="icofont-ui-touch-phone"></i>
                      <span className="small ms-2">{profile?.phone} </span>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                      <i className="icofont-email"></i>
                      <span className="small ms-2">{profile?.email}</span>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                      <i className="icofont-birthday-cake"></i>
                      <span className="small ms-2">{profile?.joined}</span>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                      <i className="icofont-address-book"></i>
                      <span className="small ms-2">
                        {profile?.group.map((groupItem, index) => (
                          <div key={index}>
                            {capitalizeFirstLetterOfEachWord(groupItem.group.name)}
                          </div>
                        ))}
                      </span>
                    </div>
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

//export default EmployeeProfile;
