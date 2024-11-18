import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { message } from 'antd'
import LocationTime from './LocationTime'
import Avatar1 from '../assets/images/xs/avatar1.jpg'
import Avatar2 from '../assets/images/xs/avatar2.jpg'
import Avatar3 from '../assets/images/xs/avatar3.jpg'
import Avatar4 from '../assets/images/xs/avatar4.jpg'
import Avatar5 from '../assets/images/xs/avatar5.jpg'
import Avatar6 from '../assets/images/xs/avatar6.jpg'
import Avatar7 from '../assets/images/xs/avatar7.jpg'
import Avatar8 from '../assets/images/xs/avatar8.jpg'
import ProfileImg from '../assets/images/profile_av.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AddNewUserModal from './AddNewUserModal'
//import ReactDOM from "react-dom";
//import TimezoneSelect from "react-timezone-select";
import { useNavigate, useLocation } from 'react-router-dom'
//import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import CityTime from './CityTime'
import makeAPICall from '../utils/apiUtils'
import {
  getCurrentAttendanceStatusSelector,
  GetAttendanceStatus
} from '../store/header/getAttendanceStatus'

const baseURL = import.meta.env.VITE_API_URL

export default function Header() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()
  const [summary, setSummary] = useState(0)
  const [profile, setProfile] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // use the hook and selector
  //const { loading, attendance } = useSelector(getCurrentAttendanceStatusSelector);

  /*
    useEffect(() => {
    dispatch(GetAttendanceStatus({}));
  }, [dispatch]);

  console.log(attendance, "test");
  */
  useEffect(() => {
    const summary = () => {
      return makeAPICall({
        path: '/user/clock/status',
        method: 'GET'
      })
        .then((res) => {
          setSummary(res)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    summary()
    //getInvestments();
  }, [])

  function getUserProfile() {
    //setLoading(true);
    return makeAPICall({
      path: '/auth/profile/',
      method: 'GET',
      params: null
    })
      .then((res) => {
        setProfile(res)
        //console.log(res);
      })
      .catch((err) => {
        setLoading(false)
        message.error(err.message, 5)
      })
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const cities = [
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Frankfurt', timezone: 'Europe/Berlin' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' }
  ]
  const [isAddUserModa, setIsAddUserModa] = useState(false)

  const [selectedTimezone, setSelectedTimezone] = useState({})
  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          <div className="h-right d-flex align-items-center order-1">
            <div className="d-flex">
              <LocationTime city={summary} />
              {/*<div className="select-wrapper">
                                <TimezoneSelect
                                value={selectedTimezone}
                                onChange={setSelectedTimezone}
                                />
                            </div>
                            <h3>Output:</h3>
                            <div
                                style={{
                                backgroundColor: '#ccc',
                                padding: '20px',
                                margin: '20px auto',
                                borderRadius: '5px',
                                maxWidth: '600px',
                                }}
                            >
                                <pre
                                style={{
                                    margin: '0 20px',
                                    fontWeight: 500,
                                    fontFamily: 'monospace',
                                }}
                                >
                                {JSON.stringify(selectedTimezone, null, 2)}
                                </pre>
                            </div>*/}

              {/* <ul className="cities">
        {cities.map((city, index) => (
          <CityTime city={city} key={index} />
        ))}
      </ul> */}

              <Link
                to="help"
                className="nav-link collapsed info-page-icon text-primary"
                title="Get Help">
                <i className="icofont-info-square fs-5"></i>
              </Link>
              <div className="avatar-list avatar-list-stacked me-2 px-3">
                <img className="avatar rounded-circle" src={Avatar2} alt="" />
                <img className="avatar rounded-circle" src={Avatar1} alt="" />
                <img className="avatar rounded-circle" src={Avatar3} alt="" />
                <img className="avatar rounded-circle" src={Avatar4} alt="" />
                <img className="avatar rounded-circle" src={Avatar7} alt="" />
                <img className="avatar rounded-circle" src={Avatar8} alt="" />
                <span
                  className="avatar rounded-circle pointer text-center"
                  onClick={() => {
                    setIsAddUserModa(true)
                  }}>
                  <i className="icofont-ui-add"></i>
                </span>
              </div>
            </div>
            <Dropdown className="notifications px-md-0 px-2">
              <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse">
                <i className="icofont-alarm fs-5"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-animation dropdown-menu-sm-end m-0 rounded-lg border-0 p-0 shadow">
                <div className="card w380 border-0">
                  <div className="card-header border-0 p-3">
                    <h5 className="font-weight-light d-flex justify-content-between mb-0">
                      <span>Notifications</span>
                      <span className="badge text-white">11</span>
                    </h5>
                  </div>
                  <div className="tab-content card-body">
                    <div className="tab-pane fade show active">
                      <ul className="list-unstyled list mb-0">
                        <li className="border-bottom mb-1 py-2">
                          <a href="#!" className="d-flex">
                            <img className="avatar rounded-circle" src={Avatar1} alt="" />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Dylan Hunter</span>{' '}
                                <small>2MIN</small>
                              </p>
                              <span className="">
                                Added 2021-02-19 my-Task ui/ux Design{' '}
                                <span className="badge bg-success">Review</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="border-bottom mb-1 py-2">
                          <a href="#!" className="d-flex">
                            <div className="avatar rounded-circle no-thumbnail">DF</div>
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Diane Fisher</span>{' '}
                                <small>13MIN</small>
                              </p>
                              <span className="">Task added Get Started with Fast Cad project</span>
                            </div>
                          </a>
                        </li>
                        <li className="border-bottom mb-1 py-2">
                          <a href="#!" className="d-flex">
                            <img className="avatar rounded-circle" src={Avatar3} alt="" />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Andrea Gill</span>{' '}
                                <small>1HR</small>
                              </p>
                              <span className="">Quality Assurance Task Completed</span>
                            </div>
                          </a>
                        </li>
                        <li className="border-bottom mb-1 py-2">
                          <a href="#!" className="d-flex">
                            <img className="avatar rounded-circle" src={Avatar5} alt="" />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Diane Fisher</span>{' '}
                                <small>13MIN</small>
                              </p>
                              <span className="">Add New Project for App Developemnt</span>
                            </div>
                          </a>
                        </li>
                        <li className="border-bottom mb-1 py-2">
                          <a href="#!" className="d-flex">
                            <img className="avatar rounded-circle" src={Avatar6} alt="" />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Andrea Gill</span>{' '}
                                <small>1HR</small>
                              </p>
                              <span className="">Add Timesheet For Rhinestone project</span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2">
                          <a href="#!" className="d-flex">
                            <img className="avatar rounded-circle" src={Avatar7} alt="" />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="font-weight-bold">Zoe Wright</span>{' '}
                                <small className="">1DAY</small>
                              </p>
                              <span className="">Add Calander Event</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="card-footer border-top-0 text-center" href="#!">
                    {' '}
                    View all notifications
                  </a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown user-profile ms-sm-3 d-flex align-items-center ms-2">
              <div className="u-info me-2">
                <p className="line-height-sm mb-0 text-end">
                  <span className="font-weight-bold">Dylan Hunter</span>
                </p>
                <small>Admin Profile</small>
              </div>
              <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse p-0">
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src={ProfileImg}
                  alt="profile"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-animation dropdown-menu-end m-0 rounded-lg border-0 p-0 shadow">
                <div className="card w280 border-0">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img className="avatar rounded-circle" src={ProfileImg} alt="profile" />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold">Dylan Hunter</span>
                        </p>
                        <small className="">Dylan.hunter@gmail.com</small>
                      </div>
                    </div>

                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                  </div>
                  <div className="list-group m-2">
                    <Link to="tasks" className="list-group-item list-group-item-action border-0">
                      <i className="icofont-tasks fs-5 me-3"></i>My Task
                    </Link>
                    <Link to="members" className="list-group-item list-group-item-action border-0">
                      <i className="icofont-ui-user-group fs-6 me-3"></i>members
                    </Link>
                    <Link to="sign-in" className="list-group-item list-group-item-action border-0">
                      <i className="icofont-logout fs-6 me-3"></i>Signout
                    </Link>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                    <Link to="sign-up" className="list-group-item list-group-item-action border-0">
                      <i className="icofont-contact-add fs-5 me-3"></i>Add personal account
                    </Link>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <button
            className="navbar-toggler menu-toggle order-3 border-0 p-0"
            onClick={() => {
              var side = document.getElementById('mainSideMenu')
              if (side) {
                if (side.classList.contains('open')) {
                  side.classList.remove('open')
                } else {
                  side.classList.add('open')
                }
              }
            }}>
            <span className="fa fa-bars"></span>
          </button>

          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-md-0 mb-3">
            <div className="input-group input-group-lg flex-nowrap">
              <button type="button" className="input-group-text" id="addon-wrapping">
                <i className="fa fa-search"></i>
              </button>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="search"
                aria-describedby="addon-wrapping"
              />
              <button
                type="button"
                className="input-group-text add-member-top"
                onClick={() => {
                  setIsAddUserModa(true)
                }}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AddNewUserModal
        show={isAddUserModa}
        onClose={() => {
          setIsAddUserModa(false)
        }}
      />
    </div>
  )
}

//export default Header;
