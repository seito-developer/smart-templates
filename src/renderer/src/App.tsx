import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import { HOME, SIGNUP, TEMPLATES } from './constants/routes'
import InitialAppointment from './pages/initial-appointment'
import SiidSales from './pages/siid-sales'
import SiidStart from './pages/siid-start'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={TEMPLATES.INITIAL_APPOINTMENT} element={<InitialAppointment />} />
        <Route path={TEMPLATES.SIID_SALES} element={<SiidSales />} />
        <Route path={TEMPLATES.SIID_START} element={<SiidStart />} />
      </Routes>
    </HashRouter>
  )
}

export default App
