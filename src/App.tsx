import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
