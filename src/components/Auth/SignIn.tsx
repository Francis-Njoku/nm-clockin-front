import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLoginStore from '../../store/auth/useAuthRedux'

// @ts-expect-error img
import GoogleImg from '../../assets/images/google.svg'

export default function SignIn() {
  const { loginUser } = useLoginStore()

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = () => {
    const data = {
      email: inputValues.email,
      password: inputValues.password
    }
    loginUser(data)
  }

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            <h1>Sign in</h1>
            <span>Free access to our dashboard.</span>
          </div>
          <div className="col-12 mb-4 text-center">
            <a className="btn btn-lg btn-outline-secondary btn-block" href="#!">
              <span className="d-flex justify-content-center align-items-center">
                <img className="avatar xs me-2" src={GoogleImg} alt="Imag Description" />
                Sign in with Google
              </span>
            </a>
            <span className="dividers mt-4 text-muted">OR</span>
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
              <div className="form-label">
                <span className="d-flex justify-content-between align-items-center">
                  Password
                  <Link className="text-secondary" to={`/password-reset`}>
                    Forgot Password?
                  </Link>
                </span>
              </div>
              <input
                name="password"
                type="password"
                value={inputValues.password}
                onChange={handleChangeInput}
                className="form-control form-control-lg"
                placeholder="***************"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>
          <div className="col-12 mt-4 text-center">
            <button
              className="btn btn-lg btn-block btn-light lift text-uppercase"
              type="button"
              onClick={handleSubmit}
              disabled={!(inputValues.password && inputValues.email)}>
              SIGN IN
            </button>
          </div>
          <div className="col-12 mt-4 text-center">
            {/*<span className="text-muted">Don't have an account yet? <Link to={`/sign-up`} className="text-secondary">Sign up here</Link></span>*/}
          </div>
        </form>
      </div>
    </div>
  )
}
