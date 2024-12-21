import { useState } from 'react'

import { useForm } from 'react-hook-form'

import useAuthRedux from 'global/store/auth/useAuthRedux'
import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'
import { useUsersRedux } from 'global/store/users/useUsersRedux'

import { Modal } from 'react-bootstrap'

function AddLeave({ isModal, setIsModal, refresh, setRefresh }) {
  const [user_recipients, set_User_recipients] = useState<any[]>([])

  const { createLeave } = useLeaveRedux()
  const {
    users: { data: users },
    getUsers
  } = useUsersRedux()

  const {
    profile: { data: profile }
  } = useAuthRedux()

  getUsers()

  // console.log(users)

  const lineManagers = users?.filter((user) => user?.id !== profile?.id) || []

  // console.log(users, lineManagers)

  const { register, handleSubmit, reset, watch } = useForm({
    mode: 'onBlur'
  })
  const registerOptions = {
    default: {}
  }

  const toggleLang = (option) => {
    if (user_recipients.includes(option)) {
      set_User_recipients(user_recipients.filter((item) => item !== option))
    } else {
      set_User_recipients([...user_recipients, option])
    }
  }

  return (
    <Modal
      centered
      show={isModal}
      onHide={() => {
        setIsModal(false)
      }}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Leave</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleSubmit((data) => {
          // console.log({ ...data, user_recipients })
          createLeave(
            { ...data, user_recipients: user_recipients.toString() },
            refresh,
            setRefresh,
            reset,
            setIsModal
          )
          set_User_recipients([])
        })}>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Reason</label>
            <input
              className="form-control"
              type="text"
              {...register(`name`, registerOptions.default)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Leave type</label>
            <select className="form-select" {...register(`leave_type`, registerOptions.default)}>
              <option value="">---Leave Type---</option>
              <option value="Medical">Medical Leave</option>
              <option value="Casual">Casual Leave</option>
              <option value="Maternity">Maternity Leave</option>
            </select>
          </div>
          <div className="deadline-form">
            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label htmlFor="start" className="form-label">
                  Leave From Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="start"
                  min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  // max={new Date(new Date().getFullYear(), 11, 1).toISOString().split('T')[0]}
                  {...register(`start`, registerOptions.default)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="end" className="form-label">
                  Leave to Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="end"
                  min={watch('start')}
                  {...register(`end`, registerOptions.default)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="reason" className="form-label">
              More Details
            </label>
            <textarea
              className="form-control"
              id="reason"
              rows={3}
              {...register(`reason`, registerOptions.default)}></textarea>
          </div>
          <div className="mb-3">
            <details className="flex flex-col rounded-md border-none bg-gray-100 px-4 py-2">
              <summary className="form-label end m-0 flex flex-row items-center marker:hidden after:relative after:right-0 after:ml-1 after:justify-self-end after:transition-all after:content-['\25BC']">
                <div className="">Tag Managers</div>
                {user_recipients.length > 0 && (
                  <>
                    {`: `}
                    <div className="ml-2 flex flex-row flex-wrap gap-1 rounded-md bg-gray-300 p-2">
                      {lineManagers.map((manager) => (
                        <span
                          key={manager?.id}
                          className={
                            user_recipients.includes(manager?.email) ? 'inline' : 'hidden'
                          }>
                          {`${manager.firstName} ${manager.lastName}, `}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </summary>
              <fieldset>
                <ul className="ml-2 mt-2 p-0">
                  {lineManagers.map((manager) => (
                    <li key={manager.id} className="rounded-md p-1 hover:bg-gray-300">
                      <label htmlFor={`${manager?.id}`} className="flex flex-row justify-between">
                        {`${manager.firstName} ${manager.lastName}`}
                        <input
                          type="checkbox"
                          id={`${manager?.id}`}
                          name={`${manager?.id}`}
                          key={manager?.id}
                          value={manager?.id}
                          onClick={() => toggleLang(manager?.email)}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            </details>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsModal(false)
            }}>
            Done
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
export default AddLeave
