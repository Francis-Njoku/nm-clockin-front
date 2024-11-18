import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import makeAPICall from '../../utils/apiUtils'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import GoogleImg from '../../assets/images/forgot-password.svg'

export default function PasswordReset() {
  //const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: ''
  })
  const navigate = useNavigate() // Get the navigate function from useNavigate
  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }
  //const dispatch = useDispatch();
  // use the hook and selector
  //const { loading } = useSelector(getLoginSelector);

  const handleSubmit = () => {
    //setIsLoading(true);
    const data = {
      email: inputValues.email
      //callbackUrl: "yieldroom.africa",
    }
    return makeAPICall({
      path: '/forgot-password',
      method: 'POST',
      payload: data
    })
      .then((res) => {
        //setIsLoading(false);
        message.success(res.message)
        navigate('/2-step-authentication') // Redirect to the desired success page
      })
      .catch((err) => {
        //setIsLoading(false);
        message.error(err.message, 5)
      })
  }

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            <img src={GoogleImg} className="w240 mb-4" alt="" />
            <h1>Forgot password?</h1>
            <span>
              Enter the email address you used when you joined and we'll send you instructions to
              reset your password.
            </span>
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
          <div className="col-12 mt-4 text-center">
            <button
              className="btn btn-lg btn-block btn-light lift text-uppercase"
              type="button"
              onClick={handleSubmit}
              disabled={!inputValues.email}>
              SUBMIT
            </button>

            {/*<Link to={`/2-step-authentication`} title="" className="btn btn-lg btn-block btn-light lift text-uppercase">SUBMIT</Link> */}
          </div>
          <div className="col-12 mt-4 text-center">
            <span className="text-muted">
              <Link to={`/sign-in`} className="text-secondary">
                Back to Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

//export default PasswordReset;
