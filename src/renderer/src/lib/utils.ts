import { QuestionProps } from '@/commonInterfaces/interfaces'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function convertFee(value: number | string): string {
  return `${value.toLocaleString()}円`
}

export const getQuestionById = (questions:QuestionProps[], id:string | null): QuestionProps | null => {
  if(!id || !questions) return null
  const question = questions.find((q:QuestionProps) => q.id === id)
  return question ? question : null
}