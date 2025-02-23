import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  )
}

export default App
