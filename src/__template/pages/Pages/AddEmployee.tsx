import React, { useEffect, useState } from 'react'

import { message } from 'antd'
import TimezoneSelect from 'react-timezone-select'

import useAuthRedux from 'global/store/auth/useAuthRedux'

import { makeAPICall } from 'global/utils/api'
import { capitalizeFirstLetterOfEachWord } from 'global/utils/helperFunctions'

export default function AddEmployee() {
  const {
    register: { loading },
    registerUser
  } = useAuthRedux()
  const [department, setDepartment] = useState([])
  const [employee, setEmployee] = useState([])
  const [hasManager, setHasManager] = useState(false)
  const [joined, setJoined] = useState('')
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedManager, setSelectedManager] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const handleSelectManager = (event) => {
    setSelectedManager(event.target.value)
  }

  const validatePassword = (password) => {
    // Regular expression to check for at least one letter, one number, and one special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return passwordRegex.test(password)
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    if (!validatePassword(newPassword)) {
      setError(
        'Password must be at least 8 characters long, and include at least one letter, one number, and one special character.'
      )
    } else {
      setError('')
    }
  }

  function getDepartment() {
    //setLoading(true);
    return makeAPICall({
      path: '/department',
      method: 'GET',
      params: null
    })
      .then((res) => {
        setDepartment(res.data)
        //console.log(res);
      })
      .catch((err) => {
        //setLoading(false);
        message.error(err.message, 5)
      })
  }

  function getUsersList() {
    //setLoading(true);
    return makeAPICall({
      path: '/auth/list-users',
      method: 'GET',
      params: null
    })
      .then((res) => {
        setEmployee(res.data)
        //console.log(res);
      })
      .catch((err) => {
        //setLoading(false);
        message.error(err.message, 5)
      })
  }

  useEffect(() => {
    getDepartment()
    getUsersList()
  }, [])

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    department_id: '',
    firstname: '',
    lastname: '',
    phone: '',
    manager_id: ''
  })

  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const handleDateChange = (event) => {
    const inputDate = event.target.value
    // Ensure the date is formatted as yyyy-mm-dd
    const formattedDate = formatDateToYYYYMMDD(inputDate)
    setJoined(formattedDate)
  }

  const formatDateToYYYYMMDD = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const data = {
    email: inputValues.email,
    password: password,
    gmt: selectedTimezone.value,
    joined: joined,
    firstname: inputValues.firstname,
    lastname: inputValues.lastname,
    phone: inputValues.phone,
    department_id: selectedOption,
    hasManager: hasManager,
    manager_id: selectedManager
  }
  //console.log(data);

  const handleSubmit = () => {
    //console.log("Chima");
    const data = {
      email: inputValues.email,
      password: password,
      gmt: selectedTimezone.value,
      joined: joined,
      firstname: inputValues.firstname,
      lastname: inputValues.lastname,
      phone: inputValues.phone,
      department_id: selectedOption,
      hasManager: hasManager,
      manager_id: selectedManager
    }
    //console.log("Chimaaaa 23");
    //console.log(data);
    registerUser(data)
    //console.log("Chimaaaa 23");
  }

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between border-bottom-0 bg-transparent py-3">
        <h6 className="fw-bold mb-0">Add Employee</h6>
      </div>
      <div className="card-body">
        <form>
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                name="firstname"
                type="text"
                value={inputValues.firstname}
                onChange={handleChangeInput}
                className="form-control"
                id="firstname"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                name="lastname"
                type="text"
                value={inputValues.lastname}
                onChange={handleChangeInput}
                className="form-control"
                id="lastname"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                value={inputValues.phone}
                onChange={handleChangeInput}
                className="form-control"
                id="phone"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="emailaddress" className="form-label">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={inputValues.email}
                onChange={handleChangeInput}
                className="form-control"
                id="emailaddress"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
                id="password"
                required
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="admitdate" className="form-label">
                Date Joined
              </label>
              <input
                name="joined"
                type="date"
                value={joined}
                onChange={handleDateChange}
                className="form-control"
                id="admitdate"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                name="department_id"
                id="department"
                value={selectedOption}
                onChange={handleSelectChange}
                className="form-control">
                <option value="">Select an option</option>
                {department.map((option) => (
                  <option key={option.id} value={option.id}>
                    {capitalizeFirstLetterOfEachWord(option.name)}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="formFileMultiple" className="form-label">
                {' '}
                Timezone
              </label>
              <div className="select-wrapper">
                <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="admithasmanager" className="form-label">
                Has Manager
              </label>
              <div className="form-check">
                <input
                  id="admithasmanager"
                  type="checkbox"
                  checked={hasManager}
                  onChange={(e) => setHasManager(e.target.checked)}
                  className="form-check-input"
                />
              </div>
            </div>
            {hasManager && (
              <div className="col-md-6">
                <label htmlFor="manager" className="form-label">
                  Manager
                </label>
                <select
                  name="manager_id"
                  id="manager"
                  value={selectedManager}
                  onChange={handleSelectManager}
                  className="form-control">
                  <option value="">Select an option</option>
                  {employee.map((option2) => (
                    <option key={option2.name} value={option2.name}>
                      {capitalizeFirstLetterOfEachWord(option2.firstName)}{' '}
                      {capitalizeFirstLetterOfEachWord(option2.lastName)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!(password && inputValues.email)}
            className="btn btn-primary mt-4">
            {loading ? 'Loading' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  )
}

//export default AddEmployee;
