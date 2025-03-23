import { useEffect } from 'react'

export function useKeyContol({rightEvent, leftEvent} : {rightEvent: () => void, leftEvent: () => void}) {
  useEffect(() => {
    // コンポーネントのマウント時にリスナーを登録
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        rightEvent()
      } else if (e.key === 'ArrowLeft') {
        console.log('← (ArrowLeft) が押されました')
        leftEvent()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    // コンポーネントのアンマウント時にリスナーを解除
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])
}
