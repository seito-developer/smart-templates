import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import { HOME, OPERATIONS, SIGNUP } from './constants/routes'
import CreateItems from './pages/create-items'
import Checks from './pages/checks'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={OPERATIONS.CREATE_ITEMS} element={<CreateItems />} />
        <Route path={OPERATIONS.CHECKS} element={<Checks />} />
      </Routes>
    </HashRouter>
  )
}

export default App