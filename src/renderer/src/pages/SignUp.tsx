// src/renderer/pages/SignUp.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // サインアップ処理 (例: API呼び出し)
    console.log('SignUp with', email, password)
    // 成功したらログインページへ誘導
    navigate('/login')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:{' '}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </div>
  )
}
