import React, { useState } from 'react'
import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'
import useAuthRedux from 'global/store/auth/useAuthRedux'

import { Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import PageHeader from '../../partials/PageHeader'
import LeaveComments from 'global/components/Leave/LeaveComments'
import AddLeave from '../../components/Leave/AddLeave'

export default function ManageLeaveRequest() {
  const [isModal, setIsModal] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [isCommentsModal, setIsCommentsModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [pageCount, setPageCount] = useState(10)

  const {
    getMyTeamLeaves,
    myTeamLeaveRequests: { data: myTeamLeaveRequests, loading },
    approveLeave,
    rejectLeave
  } = useLeaveRedux()
  const { getProfile } = useAuthRedux()
  getProfile()
  getMyTeamLeaves(setPageCount, pageCount, refresh)

  const columns = [
    {
      name: 'EMPLOYEE',
      sortable: true,
      cell: (row) => (
        <div className="flex flex-col items-center justify-center">
          {/* <img className="avatar rounded-circle" src={row.user.avatar} alt=""></img> */}
          <span className="fw-bold ms-1">{`${row.user.firstName} ${row.user.lastName}`}</span>
          <a href="members-profile" className="fw-bold text-secondary">
            {row.user.name}
          </a>
        </div>
      )
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
    {
      name: 'REASON',
      selector: (row) => row.reason,
      sortable: true
    },
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
      sortable: true,
      cell: (row) => (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              approveLeave(row.id, refresh, setRefresh, setIsEditModal)
            }}>
            <i className="icofont-check-circled text-success"></i>
          </button>
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
            className="btn btn-outline-secondary deleterow"
            onClick={() => {
              rejectLeave(row.id, refresh, setRefresh, setIsDeleteModal)
            }}>
            <i className="icofont-close-circled text-danger"></i>
          </button>
        </div>
      )
    }
  ]
  const rows = myTeamLeaveRequests || []

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Leave Requests" />
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          {!loading && (
            <DataTable
              title={'Leave Requests'}
              columns={columns}
              data={rows}
              defaultSortFieldId="title"
              pagination
              selectableRows={false}
              className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
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
            {' '}
            Leave Reject
          </h5>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-sad text-danger display-2 mt-2 text-center"></i>
          <p className="fs-5 mt-4 text-center">Leave Reject</p>
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
