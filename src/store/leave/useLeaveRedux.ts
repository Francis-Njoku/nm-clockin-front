'use client'

import { useEffect } from 'react'

import {
  setGetmyleavesState,
  setGetmyteamleavesState,
  setLeaveInfo,
  setLeavesAdmin,
  setUsers
} from '.'
import { useAppDispatch, useAppSelector } from '..'
import { message } from 'antd'

import { makeAPICall } from 'global/utils/api'

function useLeaveRedux() {
  const { myLeaveRequests, myTeamLeaveRequests, leaveInfo, leavesAdmin, users } =
    useAppSelector((state) => state.leave) || {}
  const dispatch = useAppDispatch()

  return {
    users,
    myLeaveRequests,
    myTeamLeaveRequests,
    leaveInfo,
    leavesAdmin,
    getUsers: () =>
      useEffect(() => {
        dispatch(setUsers({ ...users, loading: true }))
        const fetchData = () => {
          return makeAPICall({
            path: `/auth/basic/user/details/`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(setUsers({ ...users, loading: false, data: res.data }))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, []),
    getMyLeaves: (setPageCount, pageCount, refresh, query?) =>
      useEffect(() => {
        dispatch(setGetmyleavesState({ ...myLeaveRequests, loading: true }))

        const fetchData = () => {
          return makeAPICall({
            path: `/leave/user?`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(setGetmyleavesState({ ...myLeaveRequests, loading: false, data: res.data }))
              setPageCount(Math.ceil(res.data.length / pageCount))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, [refresh]),
    getMyTeamLeaves: (setPageCount, pageCount, refresh, query?) =>
      useEffect(() => {
        dispatch(setGetmyteamleavesState({ ...myTeamLeaveRequests, loading: true }))
        const fetchData = () => {
          return makeAPICall({
            path: `/leave/manager?`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(
                setGetmyteamleavesState({ ...myTeamLeaveRequests, loading: false, data: res.data })
              )
              setPageCount(Math.ceil(res.data.length / pageCount))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, [refresh]),
    getLeaveInfo: (id, deps) =>
      useEffect(() => {
        dispatch(setLeaveInfo({ ...leaveInfo, loading: true }))
        const fetchData = () => {
          return makeAPICall({
            path: `/leaves/${id}`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(setLeaveInfo({ ...leaveInfo, loading: false, data: res.data }))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, [...deps]),
    getLeavesAdmin: (deps) =>
      useEffect(() => {
        dispatch(setLeavesAdmin({ ...leavesAdmin, loading: true }))
        const fetchData = () => {
          return makeAPICall({
            path: `/admin/leave/all?status=pending,approved`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(setLeavesAdmin({ ...leavesAdmin, loading: false, data: res.data }))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, [...deps]),
    createLeave: (data, refresh, setRefresh, reset, setIsModal) => {
      return makeAPICall({
        path: '/leave/apply/',
        payload: { ...data, status: 'pending' },
        method: 'POST'
      })
        .then(({ data: res }) => {
          setRefresh(!refresh)
          setIsModal(false)
          reset()
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    deleteLeave: (id, refresh, setRefresh) => {
      return makeAPICall({
        path: `/leaves/${id}`,
        method: 'DELETE'
      })
        .then(({ data: res }) => {
          setRefresh(!refresh)
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    approveLeave: (id, refresh, setRefresh, setIsEditModal) => {
      return makeAPICall({
        path: `/leave/approve/${id}`,
        payload: { status: 'approved' } as any,
        method: 'PATCH'
      })
        .then(({ data: res }) => {
          setIsEditModal(true)
          setTimeout(() => setRefresh(!refresh), 3000)
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    rejectLeave: (id, refresh, setRefresh, setIsDeleteModal) => {
      return makeAPICall({
        path: `/leave/approve/${id}`,
        payload: { status: 'rejected' } as any,
        method: 'PATCH'
      })
        .then(({ data: res }) => {
          setIsDeleteModal(true)
          setTimeout(() => setRefresh(!refresh), 3000)
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    postComment: (id, data, { refresh, setRefresh, setTxtComment }) => {
      return makeAPICall({
        path: `/leaves/${id}/comments/`,
        payload: { ...data },
        method: 'POST'
      })
        .then(() => {
          setRefresh(!refresh)
          setTxtComment('')
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    }
  }
}
export { useLeaveRedux }
