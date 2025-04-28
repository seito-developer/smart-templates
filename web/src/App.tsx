// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { TEMPLATES } from '../../src/renderer/src/constants/routes'
import InitialAppointment from '../../src/renderer/src/pages/initial-appointment'
import SiidSales from '../../src/renderer/src/pages/siid-sales'
import SiidStart from '../../src/renderer/src/pages/siid-start'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={HOME} element={<Login />} /> */}
        {/* <Route path={SIGNUP} element={<SignUp />} /> */}
        <Route path={TEMPLATES.INITIAL_APPOINTMENT} element={<InitialAppointment />} />
        <Route path={TEMPLATES.SIID_SALES} element={<SiidSales />} />
        <Route path={TEMPLATES.SIID_START} element={<SiidStart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
