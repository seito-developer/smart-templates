import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import Templates from '@/pages/Templates'
import SiidSales from './pages/siid-sales'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/" element={<SiidSales />} />
      </Routes>
    </HashRouter>
  )
}

export default App
