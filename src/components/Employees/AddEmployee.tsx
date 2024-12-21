import React, { useState } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'

import useAuthRedux from 'global/store/auth/useAuthRedux'
import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'
import { useUsersRedux } from 'global/store/users/useUsersRedux'

import { Modal } from 'react-bootstrap'

function AddLeave({ isModal, setIsModal, refresh, setRefresh }) {
  const [department, setDepartment] = useState([])
  const [employee, setEmployee] = useState([])
  const [hasManager, setHasManager] = useState(false)
  const { createLeave } = useLeaveRedux()
  const {
    createUser,
    users: { data: users },
    getUsers
  } = useUsersRedux()
  const {
    profile: { data: profile }
  } = useAuthRedux()

  getUsers()

  const lineManagers = users?.filter((user) => user?.id !== profile?.id) || []

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
    <Modal
      centered
      show={isModal}
      size="lg"
      onHide={() => {
        setIsModal(false)
      }}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Employee</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(data, reset, setIsModal, [refresh, setRefresh])
        )}>
        <Modal.Body>
          <div className="modal-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  {...register(`firstname`, registerOptions.firstname)}
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
                  type="text"
                  {...register(`lastname`, registerOptions.lastname)}
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
                  type="text"
                  {...register(`phone`, registerOptions.phone)}
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
                  type="email"
                  {...register(`email`, registerOptions.email)}
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
                  type="password"
                  {...register(`password`, registerOptions.password)}
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="admitdate" className="form-label">
                  Date Joined
                </label>
                <input
                  type="date"
                  {...register(`joined`, registerOptions.default)}
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
                  id="department"
                  {...register(`department_id`, registerOptions.default)}
                  className="form-control">
                  <option value="">Select an option</option>
                  {department.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
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
                    onChange={() => setHasManager(!hasManager)}
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
                    id="manager"
                    {...register(`manager_id`, registerOptions.default)}
                    className="form-control">
                    <option value="">Select an option</option>
                    {lineManagers.map((option) => (
                      <option key={option.name} value={option.id}>
                        {option.firstName} {option.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="self-start">
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
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsModal(false)
            }}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
export default AddLeave
