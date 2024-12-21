'use client'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

import makeAPICall from '../../utils/api'
import { useAppDispatch, useAppSelector } from '..'
import { setUserInfo, setUsers } from '.'

function useUsersRedux() {
  const { userInfo, users } = useAppSelector((state) => state.users) || {}
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return {
    users,
    getUserInfo: (id, deps) =>
      useEffect(() => {
        dispatch(setUserInfo({ ...userInfo, loading: true }))
        const fetchData = () => {
          return makeAPICall({
            path: `/users/${id}`,
            method: 'GET'
          })
            .then((res) => {
              dispatch(setUserInfo({ ...userInfo, loading: false, data: res.data }))
            })
            .catch((err) => {
              console.log(err)
            })
        }
        fetchData()
      }, [...deps]),
    getUsers: (deps?) => {
      const depends = deps ?? []
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
      }, depends)
    },
    createUser: (data, reset, setIsModal, refetch) => {
      return makeAPICall({
        path: data?.referral_code ? '/auth/register/referral/' : '/auth/register',
        payload: { gmt: 'Pacific/Midway', ...data },
        method: 'POST'
      })
        .then((res) => {
          const [refresh, setRefresh] = refetch
          reset()
          setIsModal(false)
          message.success('User Created Successfully')
          setRefresh(!refresh)
        })
        .catch((err) => {
          message.error(err.message, 5)
          console.log(err)
        })
    },
    deleteUser: (id, refresh, setRefresh) => {
      return makeAPICall({
        path: `/users/${id}`,
        method: 'DELETE'
      })
        .then(({ data: res }) => {
          setRefresh(!refresh)
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    approveUser: (id, refresh, setRefresh, setIsEditModal) => {
      return makeAPICall({
        path: `/user/approve/${id}`,
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
    rejectUser: (id, refresh, setRefresh, setIsDeleteModal) => {
      return makeAPICall({
        path: `/user/approve/${id}`,
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
        path: `/users/${id}/comments/`,
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
export { useUsersRedux }
