import React, { useEffect, useRef, useState } from 'react'

import useAuthRedux from 'global/store/auth/useAuthRedux'
import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'

import { Modal } from 'react-bootstrap'

function Leavetile({ leaveId, isCommentsModal, setIsCommentsModal }) {
  const bottomRef = useRef(null)
  const [refresh, setRefresh] = useState(false)

  const { profile } = useAuthRedux()
  const {
    leaveInfo: { data: leave },
    getLeaveInfo,
    postComment
  } = useLeaveRedux()

  getLeaveInfo(leaveId, [leaveId, refresh])

  const [txtComment, setTxtComment] = useState('')

  const onCommentSend = () => {
    if (txtComment !== '') {
      postComment(
        leaveId,
        {
          comment: txtComment
        },
        { refresh, setRefresh, setTxtComment }
      )
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [leave?.comments])

  return (
    <Modal
      centered
      show={isCommentsModal}
      onHide={() => {
        setIsCommentsModal(false)
      }}
      className="">
      <Modal.Header closeButton>
        <h5 className="modal-title fw-bold" id="leaverejectLabel">
          {`  Comments: ${leave?.name}`}
        </h5>
      </Modal.Header>
      <Modal.Body className="flex-column d-flex">
        <div className="col-12 d-flex">
          <div className="card card-leave-body w-100 py-md-4 order-1 h-[70vh] overflow-scroll border-0 px-2 py-3">
            <ul className="leave-history list-unstyled py-lg-5 py-md-4 flex-grow-1 mb-0 flex flex-col gap-2 py-3">
              {profile &&
                leave?.comments?.map((comment, i) => {
                  const received = comment.user.id !== profile?.data?.id
                  return (
                    <li
                      key={'comments' + i}
                      className={
                        received
                          ? 'd-flex align-items-end mb-3 flex-row'
                          : 'd-flex align-items-end mb-3 flex-row-reverse'
                      }>
                      <div
                        className={`max-width-70 flex flex-col gap-1 ${received ? '' : 'text-end'}`}>
                        <div className="user-info mb-1 flex flex-col gap-1">
                          {received && (
                            <span className="text-xs text-gray-800">
                              {`${comment?.user?.firstName} ${comment?.user?.lastName}`}
                            </span>
                          )}
                        </div>
                        <div
                          className={`card border-0 p-2 pb-1 shadow-sm ${received ? '' : 'color-bg-100 text-gray-800'}`}>
                          <div className="comment">{comment.comment}</div>
                          <span className="mt-2 text-xs text-muted">{comment.updated_at}</span>
                        </div>
                      </div>
                    </li>
                  )
                })}
            </ul>
            <div className="leave-comment flex flex-row items-center justify-between gap-2">
              <textarea
                className="form-control text-sm"
                value={txtComment}
                placeholder="Enter text here..."
                onChange={(e) => {
                  setTxtComment(e.target.value)
                }}
              />
              <button
                className="rounded-md bg-blue-950 px-4 py-2 text-white"
                type="button"
                onClick={() => {
                  onCommentSend()
                }}>
                Send
              </button>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Leavetile
