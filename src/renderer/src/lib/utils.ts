import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function convertFee(value: number | string): string {
  return `${value.toLocaleString()}円`
}

export const getQuestionById = (questions, id) => {
  return questions.find((q) => q.id === id)
}

export const convertBoolean = (args: boolean, option: number): string | boolean => {
  if(option === 0) return args ? 'TRUE' : 'FALSE'
  if(option === 1) return args ? '有' : '無'
  else return args ? true : false
}