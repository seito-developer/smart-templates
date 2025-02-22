import { Link } from 'react-router-dom'

export default function Home(): JSX.Element {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello World!</h1>
      <p>Welcome to my Electron App.</p>
      <Link to="/login">Go to Login</Link>
      <br />
      <Link to="/signup">Go to Sign Up</Link>
    </div>
  )
}
