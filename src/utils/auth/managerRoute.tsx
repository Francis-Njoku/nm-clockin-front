import useAuthRedux from 'global/store/auth/useAuthRedux'

import Page405 from 'global/components/Auth/Page405'

function PrivateRoute({ children }) {
  const {
    auth: {
      data: { isManager }
    }
  } = useAuthRedux()

  if (isManager) return children

  return (
    <div className="flex flex-col justify-center items-center container-xxl">
      <Page405 />
    </div>
  )
}

export default PrivateRoute
