import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import InitialAppointment from './pages/initial-appointment'
import { HOME, SIGNUP, TEMPLATES } from './constants/routes'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={TEMPLATES.SIID_SALES} element={<InitialAppointment />} />
      </Routes>
    </HashRouter>
  )
}

export default App
