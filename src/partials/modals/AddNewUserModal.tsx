import React from 'react'

import Avatar2 from 'global/assets/images/xs/avatar2.jpg'
import Avatar3 from 'global/assets/images/xs/avatar3.jpg'
import Avatar8 from 'global/assets/images/xs/avatar8.jpg'

import { Dropdown, Modal } from 'react-bootstrap'

function AddNewUserModal(props) {
  const { onClose, show } = props
  return (
    <Modal centered size="lg" show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Employee Invitation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="inviteby_email">
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              id="exampleInputEmail1"
              aria-describedby="exampleInputEmail1"
            />
            <button className="btn btn-primary" type="button" id="button-addon2">
              Sent
            </button>
          </div>
        </div>
        <div className="members_list">
          <h6 className="fw-bold">Employee </h6>
          <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
            <li className="list-group-item text-md-start py-3 text-center">
              <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                <div className="no-thumbnail mb-md-0 mb-2">
                  <img className="avatar lg rounded-circle" src={Avatar2} alt="" />
                </div>
                <div className="flex-fill text-truncate ms-3">
                  <h6 className="fw-bold mb-0">Rachel Carr(you)</h6>
                  <span className="text-muted">rachel.carr@gmail.com</span>
                </div>
                <div className="members-action">
                  <span className="members-role">Admin</span>
                  <Dropdown className="btn-group">
                    <Dropdown.Toggle as="button" className="btn dropdown-toggle bg-transparent">
                      <i className="icofont-ui-settings fs-6"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="icofont-ui-password fs-6 me-2"></i>ResetPassword
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="icofont-chart-line fs-6 me-2"></i>ActivityReport
                        </a>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </li>
            <li className="list-group-item text-md-start py-3 text-center">
              <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                <div className="no-thumbnail mb-md-0 mb-2">
                  <img className="avatar lg rounded-circle" src={Avatar3} alt="" />
                </div>
                <div className="flex-fill text-truncate ms-3">
                  <h6 className="fw-bold mb-0">
                    Lucas Baker
                    <a href="#!" className="link-secondary ms-2">
                      (Resend)
                    </a>
                  </h6>
                  <span className="text-muted">lucas.baker@gmail.com</span>
                </div>
                <div className="members-action">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle bg-transparent"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Members
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="icofont-check-circled"></i>
                          Member
                          <span>Can view, edit, delete, comment on and save files</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="fs-6 me-1 p-2"></i>
                          Admin
                          <span>Member, but can invite and manage team members</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Dropdown className="btn-group">
                    <Dropdown.Toggle as="button" className="btn dropdown-toggle bg-transparent">
                      <i className="icofont-ui-settings fs-6"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="icofont-delete-alt fs-6 me-2"></i>Delete Member
                        </a>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </li>
            <li className="list-group-item text-md-start py-3 text-center">
              <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                <div className="no-thumbnail mb-md-0 mb-2">
                  <img className="avatar lg rounded-circle" src={Avatar8} alt="" />
                </div>
                <div className="flex-fill text-truncate ms-3">
                  <h6 className="fw-bold mb-0">Una Coleman</h6>
                  <span className="text-muted">una.coleman@gmail.com</span>
                </div>
                <div className="members-action">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle bg-transparent"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Members
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="icofont-check-circled"></i>
                          Member
                          <span>Can view, edit, delete, comment on and save files</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="fs-6 me-1 p-2"></i>
                          Admin
                          <span>Member, but can invite and manage team members</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group">
                    <Dropdown className="btn-group">
                      <Dropdown.Toggle as="button" className="btn dropdown-toggle bg-transparent">
                        <i className="icofont-ui-settings fs-6"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="icofont-ui-password fs-6 me-2"></i>ResetPassword
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="icofont-chart-line fs-6 me-2"></i>ActivityReport
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="icofont-delete-alt fs-6 me-2"></i>Suspend member
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="icofont-not-allowed fs-6 me-2"></i>Delete Member
                          </a>
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Done
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewUserModal
