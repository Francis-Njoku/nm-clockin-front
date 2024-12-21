import AppLayout from './partials/layouts/AppLayout'
import AuthLayout from './partials/layouts/AuthLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/*" element={<AppLayout />} />
        {/* Add other routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
