import { QuestionProps } from '@/data/questions/siidSales'
import { Progress } from './ui/progress'

export default function ProgressBar({currentQuestion}: {currentQuestion: QuestionProps}) {
    const parent = currentQuestion.length / 100
    const child = currentQuestion.index
    const number = child / parent
    
  return (
    <Progress value={number} className="w-full" />
  )
}
