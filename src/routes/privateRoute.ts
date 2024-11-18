import { useNavigate, Navigate } from 'react-router-dom'
import { isLogin } from '../utils/authUtils'

function PrivateRoute({ children }) {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/sign-in', { replace: true })

    // Delay the reload slightly to ensure navigation completes
    window.location.replace('/sign-in')
  }

  return isLogin() ? children : handleRedirect()
}

export default PrivateRoute
