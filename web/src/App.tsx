import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TEMPLATES } from '@/constants/routes'
import InitialAppointment from '@/pages/initial-appointment'
import SiidSales from '@/pages/siid-sales'
import SiidStart from '@/pages/siid-start'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={TEMPLATES.INITIAL_APPOINTMENT} element={<InitialAppointment />} />
        <Route path={TEMPLATES.SIID_SALES} element={<SiidSales />} />
        <Route path={TEMPLATES.SIID_START} element={<SiidStart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
