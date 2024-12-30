import { useNavigate } from 'react-router-dom'

import { isLogin } from './'

function PrivateRoute({ children }) {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/auth/sign-in', { replace: true })

    window.location.replace('/auth/sign-in')
  }

  console.log('you must be looged in to access this page')

  return isLogin() ? children : handleRedirect()
}

export default PrivateRoute
