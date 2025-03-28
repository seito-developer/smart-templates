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
  if (option === 0) return args ? 'TRUE' : 'FALSE'
  if (option === 1) return args ? '有' : '無'
  else return args ? true : false
}

export const zeroPadNumber = (supply: number) => {
  // 数値が5桁を超える場合はエラーをスロー
  if (supply >= 100000) {
    throw new Error('数値が5桁を超えています。')
  }
  // 数値を文字列に変換し、5桁になるようにゼロ埋め
  return supply.toString().padStart(5, '0')
}

export const getContentData = (arg: string) => {
  if (arg === 'gif画像')
    return {
      extention: 'gif',
      contentType: 'image/gif'
    }
  if (arg === 'mp4動画')
    return {
      extention: 'mp4',
      contentType: 'video/mp4'
    }
  if (arg === '3Dモデル')
    return {
      extention: 'glb',
      contentType: 'model/gltf-binary'
    }

  // defaultはpng画像
  return {
    extention: 'png',
    contentType: 'image/png'
  }
}

export const getKeysAndValues = (obj: Object) => {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  return {
    keys: keys,
    values: values
  }
}