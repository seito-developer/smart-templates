
import { Progress } from './ui/progress'
import { QuestionProps } from '@/commonInterfaces/interfaces'

export default function ProgressBar({currentQuestion}: {currentQuestion: QuestionProps | null}) {
  const calcPercentage = () => {
    if (!currentQuestion) return 100
    const parent = currentQuestion.totalLength / 100
    const child = currentQuestion.index
    const number = child / parent
    return number
  }
    
  return (
    <Progress value={calcPercentage()} className="w-full" />
  )
}
