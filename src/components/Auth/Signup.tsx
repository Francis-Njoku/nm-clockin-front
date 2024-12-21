import { useAuthRedux } from 'global/store/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'

function Signup() {
  const { registerUser } = useAuthRedux()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  const registerOptions = {
    firstname: {
      required: 'First name is required',
      minLength: {
        value: 3,
        message: 'First name must have at least 3 characters'
      }
    },
    lastname: {
      required: 'Last name is required',
      minLength: {
        value: 3,
        message: 'Last name must have at least 3 characters'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
        message: 'Invalid email address'
      }
    },
    phone: {
      minLength: {
        value: 1,
        message: 'Phone must have at least 1 character'
      },
      maxLength: {
        value: 15,
        message: 'Phone must have no more than 15 characters'
      }
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters'
      },
      validate: {
        uppercase: (value) =>
          /[A-Z]/g.test(value) || 'Password should contain at least one uppercase letter',
        lowercase: (value) =>
          /[a-z]/g.test(value) || 'Password should contain at least one lowercase letter',
        number: (value) => /[0-9]/g.test(value) || 'Password should contain at least one number',
        specialCharacter: (value) =>
          /[#?!@$%^&*-]/g.test(value) || 'Password should contain at least one special character'
      }
    },

    confirmPassword: {
      required: 'password confirmation is required',
      validate: {
        confirmPassword: (value) => watch('password') === value || "Passwords don't match"
      }
    },
    default: {}
  }

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 rounded-lg border-0">
      <div
        className="w-100 p-md-5 card bg-dark text-light border-0 p-3"
        style={{ maxWidth: '32rem' }}>
        <form onSubmit={handleSubmit((data) => registerUser(data))} className="row g-1 p-md-4 p-3">
          <div className="col-12 mb-lg-5 mb-1 text-center">
            <h1>Create your account</h1>
            <span>Free access to our dashboard.</span>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">Full name</label>
              <input
                {...register(`firstname`, registerOptions.firstname)}
                type="text"
                className="form-control form-control-lg"
                placeholder="John"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">&nbsp;</label>
              <input
                {...register(`lastname`, registerOptions.lastname)}
                type="text"
                className="form-control form-control-lg"
                placeholder="Parker"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input
                {...register(`email`, registerOptions.email)}
                type="email"
                className="form-control form-control-lg"
                placeholder="name@example.com"
              />
            </div>
          </div>
          {/* <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Phone Number</label>
              <input
                {...register(`phone`, registerOptions.phone)}
                type="tel"
                className="form-control form-control-lg"
                placeholder="+234 803 123 4567"
              />
            </div>
          </div> */}
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                {...register(`password`, registerOptions.password)}
                type="password"
                className="form-control form-control-lg"
                placeholder="8+ characters required"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">Confirm password</label>
              <input
                {...register(`confirm_password`, registerOptions.confirmPassword)}
                type="password"
                className="form-control form-control-lg"
                placeholder="8+ characters required"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                {...register(`start`, registerOptions.default)}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I accept the{' '}
                <a href="#!" title="Terms and Conditions" className="text-secondary">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="firstname"
              render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="lastname"
              render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="confirm_password"
              render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
            />
          </div>
          <div className="col-12 mt-4 text-center">
            <button
              // onClick={() => console.log('SUBMIT!!!!')}
              type="submit"
              className="btn btn-lg btn-block btn-light lift text-uppercase">
              SIGN UP
            </button>
          </div>
          <div className="col-12 mt-4 text-center">
            <span className="text-muted">
              Already have an account?{' '}
              <Link to={`/auth/sign-in`} title="Sign in" className="text-secondary">
                Sign in here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
