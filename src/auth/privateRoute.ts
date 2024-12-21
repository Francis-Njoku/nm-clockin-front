import { useNavigate } from 'react-router-dom'
import { isLogin } from '../utils/auth'

function PrivateRoute({ children }) {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/auth/sign-in', { replace: true })

    // window.location.replace('/auth/sign-in')
  }

  return isLogin() ? children : handleRedirect()
}

export default PrivateRoute
