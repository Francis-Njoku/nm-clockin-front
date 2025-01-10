import React, { useState } from 'react'

import useAuthRedux from 'global/store/auth/useAuthRedux'
import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'

import { Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

import AddLeave from 'global/components/Employees/AddLeave'
import LeaveComments from 'global/components/Employees/LeaveComments'
import PageHeader from 'global/components/__Library/PageHeader'

function LeaveRequest() {
  const [isModal, setIsModal] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [isCommentsModal, setIsCommentsModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [refresh, setRefresh] = useState(false)
  // const [pageCount, setPageCount] = useState(10)

  const {
    getMyLeaves,
    myLeaveRequests: { data: myLeaveRequests, loading },
    deleteLeave
  } = useLeaveRedux()
  const { getProfile } = useAuthRedux()
  getProfile()
  getMyLeaves(refresh)

  const rows = myLeaveRequests || []
  const columns = [
    {
      name: 'REASON',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'LEAVE TYPE',
      selector: (row) => row.leave_type,
      sortable: true
    },
    {
      name: 'FROM',
      selector: (row) => row.start,
      sortable: true
    },
    {
      name: 'TO',
      selector: (row) => row.end,
      sortable: true
    },
    // {
    //   name: 'MANAGERS',
    //   selector: (row) => row.user.manager,
    //   cell: (row) =>
    //     row.user.hasManager ? (
    //       row.user.manager.map(() => (
    //         <div className="flex flex-col items-center justify-center">
    //           <img className="avatar rounded-circle" src={row.manager.avatar} alt=""></img>
    //           <span className="fw-bold ms-1">{row.manager.name}</span>
    //         </div>
    //       ))
    //     ) : (
    //       <></>
    //     )
    // },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`font-bold ${
            row.status === 'Pending'
              ? 'text-secondary'
              : row.status === 'Approved'
                ? 'text-success'
                : row.status === 'Rejected'
                  ? 'text-danger'
                  : ''
          }`}>
          {row.status}
        </span>
      )
    },
    {
      name: 'ACTION',
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            className="btn btn-outline-secondary deleterow flex flex-row items-center justify-between gap-1"
            onClick={() => {
              setIsCommentsModal(true)
              setDeleteId(row.id)
            }}>
            {/* <span className="text-xs">Comments</span> */}
            <i className="icofont-comment text-danger"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary deleterow flex flex-row items-center justify-between gap-1"
            onClick={() => {
              setIsDeleteModal(true)
              setDeleteId(row.id)
            }}>
            {/* <span className="text-xs">Cancel</span> */}
            <i className="icofont-close-circled text-danger"></i>
          </button>
        </div>
      )
    }
  ]

  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Leave Requests"
        renderRight={() => {
          return (
            <div className="d-flex w-sm-100 col-auto">
              <button
                className="btn btn-dark btn-set-task w-sm-100"
                onClick={() => {
                  setIsModal(true)
                }}>
                <i className="icofont-plus-circle fs-6 me-2"></i>Add Leave
              </button>
            </div>
          )
        }}
      />
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          {!loading && (
            <DataTable
              title={'Leave Requests'}
              columns={columns}
              data={rows}
              defaultSortFieldId="name"
              pagination
              selectableRows={false}
              className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle capitalize"
              highlightOnHover={true}
            />
          )}
        </div>
      </div>
      <AddLeave
        isModal={isModal}
        setIsModal={setIsModal}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <Modal
        centered
        show={isEditModal}
        onHide={() => {
          setIsEditModal(false)
        }}>
        <Modal.Header closeButton>
          <h5 className="modal-title fw-bold" id="dremovetaskLabel">
            {' '}
            Leave Approve
          </h5>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-simple-smile text-success display-2 mt-2 text-center"></i>
          <p className="fs-5 mt-4 text-center">Leave Approve Successfully</p>
        </Modal.Body>
      </Modal>
      <Modal
        centered
        show={isDeleteModal}
        onHide={() => {
          setIsDeleteModal(false)
        }}>
        <Modal.Header closeButton>
          <h5 className="modal-title fw-bold" id="leaverejectLabel">
            Cancel Leave Request
          </h5>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-sad text-danger display-2 mt-2 text-center"></i>
          <p className="fs-5 mt-4 text-center">Confirm Delete Leave Request?</p>
          <button
            type="button"
            className="btn btn-outline-secondary delete row gap-1 hover:text-secondary"
            onClick={() => {
              deleteLeave(deleteId, refresh, setRefresh)
              setIsDeleteModal(false)
            }}>
            <span className="text-xs">Delete Request</span>
          </button>
        </Modal.Body>
      </Modal>
      <LeaveComments
        leaveId={deleteId}
        isCommentsModal={isCommentsModal}
        setIsCommentsModal={setIsCommentsModal}
      />
    </div>
  )
}
export default LeaveRequest
