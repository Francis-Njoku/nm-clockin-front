import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import PageHeader from '../../partials/PageHeader'
import { TimesheetListData } from '../../components/Data/AppData'

function Timesheet() {
  const [isModal, setIsModal] = useState(false)

  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Project Timesheet"
        renderRight={() => {
          return (
            <div className="d-flex w-sm-100 col-auto">
              <button
                type="button"
                className="btn btn-dark btn-set-task w-sm-100"
                onClick={() => {
                  setIsModal(true)
                }}>
                <i className="icofont-file-spreadsheet fs-6 me-2"></i>Sheets Sent
              </button>
            </div>
          )
        }}
      />
      <div className="row clearfix g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <DataTable
                title={TimesheetListData.title}
                columns={TimesheetListData.columns}
                data={TimesheetListData.rows}
                defaultSortField="title"
                pagination
                selectableRows={false}
                className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
                highlightOnHover={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={isModal}
        centered
        onHide={() => {
          setIsModal(false)
        }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Sheets Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
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
          <button type="button" className="btn btn-primary">
            Sent
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Timesheet
