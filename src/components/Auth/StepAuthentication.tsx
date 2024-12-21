import React, { useRef, useState } from 'react'

import { message } from 'antd'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { makeAPICall } from 'global/utils/api'

import GoogleImg from 'global/assets/images/verify.svg'

export default function StepAuthentication() {
  const [values, setValues] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  const navigate = useNavigate() // Get the navigate function from useNavigate

  const handleChange = (e, index) => {
    const newValue = e.target.value
    if (/^[0-9]?$/.test(newValue)) {
      // Allow only single digit
      const newValues = [...values]
      newValues[index] = newValue
      setValues(newValues)
      // Focus next input
      if (newValue && index < 5) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      // Move to the previous input field on backspace if current is empty
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text')
    if (/^\d{6}$/.test(pasteData)) {
      // Ensure the pasted data is exactly 6 digits
      const newValues = pasteData.split('')
      setValues(newValues)
      // Focus the last input field
      inputRefs.current[5].focus()
    }
    e.preventDefault()
  }

  const [inputValues, setInputValues] = useState({
    password: '',
    repeat_password: '',
    email: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }
  // Concatenate the input values
  //const concatenatedResult = `${inputValues.first}${inputValues.second}${inputValues.third}${inputValues.fourth}${inputValues.fifth}${inputValues.sixth}`;

  const handleSubmit = () => {
    if (inputValues.password === inputValues.repeat_password) {
      setIsLoading(true)
      const data = {
        password: inputValues.password,
        email: inputValues.email,
        token: values.join('')
      }
      return makeAPICall({
        path: '/reset-password',
        method: 'POST',
        payload: data
      })
        .then((res) => {
          setIsLoading(false)
          message.success(res.message)
          navigate('/auth/sign-in')
        })
        .catch((err) => {
          setIsLoading(false)
          message.error(err.message, 5)
        })
    } else {
      message.error('Password does not match')
    }
  }

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            {/*<img src={GoogleImg} className="w240 mb-4" alt="" />*/}
            <h1>Verification</h1>
            <span>
              We sent a verification code to your email. Enter the code from the email in the field
              below.
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {values.map((value, index) => (
              <input
                key={index}
                type="text"
                className="form-control form-control-lg text-center"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                style={{ textAlign: 'center', fontSize: '24px' }}
              />
            ))}
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input
                name="email"
                type="email"
                value={inputValues.email}
                onChange={handleChangeInput}
                className="form-control form-control-lg"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                name="password"
                type="password"
                value={inputValues.password}
                onChange={handleChangeInput}
                className="form-control form-control-lg"
                placeholder="********"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Repeat Password</label>
              <input
                name="repeat_password"
                type="password"
                value={inputValues.repeat_password}
                onChange={handleChangeInput}
                className="form-control form-control-lg"
                placeholder="********"
              />
            </div>
          </div>
          {/*<p>Concatenated Result: {concatenatedResult}</p>

                        <p>Verification Code: {values.join('')}</p> */}
          <div className="col-12 mt-4 text-center">
            {/*<Link to={`${import.meta.env.VITE_PUBLIC_URL + "/hr-dashboard"}`} title="" className="btn btn-lg btn-block btn-light lift text-uppercase">Verify my account</Link>*/}
            <button
              className="btn btn-lg btn-block btn-light lift text-uppercase"
              type="button"
              onClick={handleSubmit}
              disabled={
                !(inputValues.email && inputValues.password && inputValues.repeat_password)
              }>
              RESET PASSWORD
            </button>
          </div>
          <div className="col-12 mt-4 text-center">
            <span className="text-muted">
              Haven't received it?{' '}
              <Link
                to={`${import.meta.env.VITE_PUBLIC_URL + '/hr-dashboard'}`}
                className="text-secondary">
                Resend a new code.
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

//export default StepAuthentication;
