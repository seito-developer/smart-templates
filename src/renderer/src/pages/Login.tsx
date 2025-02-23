// src/renderer/pages/Login.tsx
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login(): JSX.Element {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const navigate = useNavigate()

  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault()
  //   // ログイン処理 (例: API呼び出し)
  //   console.log('Login with', email, password)
  //   // 成功したらホームへリダイレクト
  //   navigate('/')
  // }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <div className="flex w-full items-center justify-between text-sm">
            <Link to="/signup" className="text-primary hover:underline">
              Create an account
            </Link>
            <Link to="/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
