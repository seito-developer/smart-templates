import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.toString() || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_APY_KEY?.toString() || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
