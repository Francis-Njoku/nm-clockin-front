import Sidebar from './partials/Sidebar'
import AuthIndex from './screens/AuthIndex'
import MainIndex from './screens/MainIndex'
import { BrowserRouter, useLocation } from 'react-router-dom'

const AUTH_ROUTES = [
  '/sign-in',
  '/sign-up',
  '/password-reset',
  '/2-step-authentication',
  '/page-404'
]

const AppContent = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const activePath = pathSegments.length > 1 ? `/${pathSegments[pathSegments.length - 1]}` : '/'

  const isAuthRoute = AUTH_ROUTES.includes(activePath)

  if (isAuthRoute) {
    return (
      <div id="mytask-layout" className="theme-indigo">
        <AuthIndex />
      </div>
    )
  }

  return (
    <div id="mytask-layout" className="theme-indigo">
      <Sidebar activekey={activePath} />
      <MainIndex activekey={activePath} />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
