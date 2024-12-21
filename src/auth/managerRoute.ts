import { useNavigate } from 'react-router-dom'
import useAuthRedux from 'global/store/auth/useAuthRedux'

function PrivateRoute({ children }) {
  const navigate = useNavigate()
  const {
    auth: {
      data: { isManager }
    }
  } = useAuthRedux()

  const handleRedirect = () => {
    navigate('/405', { replace: true })
    // window.location.replace('/405')
  }

  return isManager ? children : handleRedirect()
}

export default PrivateRoute
