import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import StaffCard from '../../components/Employees/StaffCard'
import PageHeader from '../../partials/PageHeader'
import { useUsersRedux } from 'global/store/users/useUsersRedux'
import useAuthRedux from 'global/store/auth/useAuthRedux'
import AddEmployee from 'global/components/Employees/AddEmployee'

function Members() {
  const [isModal, setIsModal] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const {
    auth: {
      data: { isAdmin }
    },
    profile: { data: profile }
  } = useAuthRedux()

  const {
    users: { data },
    getUsers
  } = useUsersRedux()

  getUsers([refresh])
  const users = data.filter((user) => user?.id !== profile?.id) || []

  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Employee"
        renderRight={() => {
          return (
            <div className="d-flex w-sm-100 col-auto">
              {isAdmin && (
                <button
                  className="btn btn-dark btn-set-task w-sm-100 me-2"
                  onClick={() => {
                    setIsModal(true)
                  }}>
                  <i className="icofont-plus-circle fs-6 me-2"></i>Add Employee
                </button>
              )}
              {/* <Dropdown>
                <Dropdown.Toggle as="button" className="btn btn-primary">
                  Status
                </Dropdown.Toggle>
                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      AgilSoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Macrosoft
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Google
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Pixelwibes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Deltasoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Design Tech
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          )
        }}
      />
      <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
        {users.map((employee, i) => {
          return (
            <div key={'skhd' + i} className="col">
              <StaffCard
                name={`${employee.firstName} ${employee.lastName}`}
                role={employee.email}
              />
            </div>
          )
        })}
      </div>
      <AddEmployee
        isModal={isModal}
        setIsModal={setIsModal}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  )
}

export default Members
