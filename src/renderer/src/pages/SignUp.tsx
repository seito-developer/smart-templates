// src/renderer/pages/SignUp.tsx
import { useSignUp } from '@/hooks/useSignUp'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignUp(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate()
  const { signUp, 
    // user, loading, error 
  } = useSignUp()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signUp(email, password);
    // 成功したらログインページへ誘導
    // navigate('/login')
    // console.log('hi');
  }


  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">SignUp</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            SingUp
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
      </form>
    </div>
  )
}
