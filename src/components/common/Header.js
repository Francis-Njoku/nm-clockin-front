import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { message } from "antd";
import LocationTime from "./LocationTime";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";
import Avatar8 from "../../assets/images/xs/avatar8.jpg";
import ProfileImg from "../../assets/images/profile_av.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import AddNewUserModal from "./AddNewUserModal";
import { capitalizeFirstLetterOfEachWord } from "../../utils/helperFunctions";
//import ReactDOM from "react-dom";
//import TimezoneSelect from "react-timezone-select";
import { useNavigate, useLocation } from "react-router-dom";
//import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import CityTime from "./CityTime";
import makeAPICall from "../../utils/apiUtils";
import { getCurrentAttendanceStatusSelector, GetAttendanceStatus } from "../../services/slices/header/getAttendanceStatus";

const baseURL = process.env.REACT_APP_API_ENDPOINT;

export default function Header() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [loading, setLoading] = useState(false);  
  const { pathname } = useLocation();
  const [summary, setSummary] = useState(0);
  const [profile, setProfile] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        path: "/user/clock/status",
        method: "GET",
      })
        .then((res) => {
          setSummary(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    summary();
    //getInvestments();
  }, []);

  function getUserProfile() {
    //setLoading(true);
    return makeAPICall({
      path: "/auth/profile",
      method: "GET",
      params: null,
    })
    .then((res) => {
        setProfile(res);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        message.error(err.message, 5);
      });
  }

  useEffect(() => {
    getUserProfile();
  }, []);


    const cities = [
        { name: "New York", timezone: "America/New_York" },
        { name: "London", timezone: "Europe/London" },
        { name: "Frankfurt", timezone: "Europe/Berlin" },
        { name: "Tokyo", timezone: "Asia/Tokyo" },
      ];
    const [isAddUserModa, setIsAddUserModa] = useState(false);

    const [selectedTimezone, setSelectedTimezone] = useState({});
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

                            <Link to="help" className="nav-link text-primary collapsed info-page-icon" title="Get Help">
                                <i className="icofont-info-square fs-5"></i>
                            </Link>
                            <div className="avatar-list avatar-list-stacked px-3 me-2">
                                <img className="avatar rounded-circle" src={Avatar2} alt="" />
                                <img className="avatar rounded-circle" src={Avatar1} alt="" />
                                <img className="avatar rounded-circle" src={Avatar3} alt="" />
                                <img className="avatar rounded-circle" src={Avatar4} alt="" />
                                <img className="avatar rounded-circle" src={Avatar7} alt="" />
                                <img className="avatar rounded-circle" src={Avatar8} alt="" />
                                <span className="avatar rounded-circle text-center pointer" onClick={() => { setIsAddUserModa(true) }}><i className="icofont-ui-add"></i></span>
                            </div>
                        </div>
                        <Dropdown className="dropdown user-profile ms-2 ms-sm-3 d-flex align-items-center">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">{profile?.data?.name}</span></p>
                                <small>Profile</small>
                            </div>
                            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse p-0">
                                <img className="avatar lg rounded-circle img-thumbnail" src={ProfileImg} alt="profile" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                <div className="card border-0 w280">
                                    <div className="card-body pb-0">
                                        <div className="d-flex py-1">
                                            <img className="avatar rounded-circle" src={ProfileImg} alt="profile" />
                                            <div className="flex-fill ms-3">
                                                <p className="mb-0"><span className="font-weight-bold">{profile?.data?.name}</span></p>
                                                <small className="">{capitalizeFirstLetterOfEachWord(profile?.data?.firstName)}</small>
                                            </div>
                                        </div>

                                        <div><hr className="dropdown-divider border-dark" /></div>
                                    </div>
                                    <div className="list-group m-2 ">
                                        <Link to="tasks" className="list-group-item list-group-item-action border-0 "><i className="icofont-tasks fs-5 me-3"></i>My Task</Link>
                                        <Link to="members" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user-group fs-6 me-3"></i>members</Link>
                                        <Link to="sign-in" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</Link>
                                        <div><hr className="dropdown-divider border-dark" /></div>
                                        <Link to="sign-up" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3"></i>Add personal account</Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3"
                        onClick={() => {
                            var side = document.getElementById("mainSideMenu");
                            if (side) {
                                if (side.classList.contains("open")) {
                                    side.classList.remove("open")
                                } else {
                                    side.classList.add("open")
                                }
                            }
                        }}
                    >
                        <span className="fa fa-bars"></span>
                    </button>


                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                        <div className="input-group flex-nowrap input-group-lg">
                            <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                            <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" />
                            <button type="button" className="input-group-text add-member-top" onClick={() => { setIsAddUserModa(true) }}><i className="fa fa-plus"></i></button>
                        </div>
                    </div>

                </div>
            </nav>
            <AddNewUserModal show={isAddUserModa} onClose={() => { setIsAddUserModa(false) }} />
        </div>
    )
}


//export default Header;  