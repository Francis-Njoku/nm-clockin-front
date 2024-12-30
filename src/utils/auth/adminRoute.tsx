import useAuthRedux from 'global/store/auth/useAuthRedux'

import Page405 from 'global/components/Auth/Page405'

function AdminRoute({ children }) {
  const {
    auth: {
      data: { isAdmin }
    }
  } = useAuthRedux()

  if (isAdmin) return children

  return (
    <div className="flex flex-col justify-center items-center container-xxl">
      <Page405 />
    </div>
  )
}

export default AdminRoute
