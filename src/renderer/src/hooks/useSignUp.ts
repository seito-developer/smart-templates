// useSignUp.ts
import { useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

interface UseSignUpReturn {
  signUp: (email: string, password: string) => Promise<void>
  user: User | null
  loading: boolean
  error: string | null
}

export function useSignUp(): UseSignUpReturn {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const signUp = async (email: string, password: string): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password
      })
      const newUser = data.user

      if (signUpError) throw new Error(signUpError.message)
      console.log('newUser:', newUser)

      // サインアップ成功時のユーザー情報をステートに保存
      setUser(newUser)
    } catch (err: any) {
      setError(err.message || '予期せぬエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return { signUp, user, loading, error }
}
