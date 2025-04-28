import { useState } from 'react'
import { AnswerField } from '@/components/AnswerField'
import Layout from '@/components/Layout'
import ProgressBar from '@/components/ProgressBar'
import { Button } from '@/components/ui/button'
import { useKeyContol } from '@/hooks/useKeyContol'
import { getQuestionById } from '@/lib/utils'
import Result from './result'
import { questions } from './questions'
import { convertDate } from '@/lib/date'
import { AnswersProps, QuestionProps } from '@/commonInterfaces/interfaces'

export default function InitialAppointment() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>('q0')
  const [answers, setAnswers] = useState<AnswersProps>({})
  const currentQuestion:QuestionProps | null = getQuestionById(questions, currentQuestionId)

  const handleNext = () => {
    if (!currentQuestion) return
    const userAnswer = answers[currentQuestion.id]

    // --- 必須回答のバリデーション ---
    if (!userAnswer || (typeof userAnswer === 'string' && userAnswer.trim() === '')) {
      alert('回答を入力（または選択）してください。')
      return
    }

    let nextId = null
    if (currentQuestion.type === 'choice') {
      const selectedValue = answers[currentQuestion.id]
      nextId = currentQuestion.nextMapping[selectedValue]
    } else if (currentQuestion.type === 'text') {
      nextId = currentQuestion.nextMapping
    }
    if (!nextId) {
      setCurrentQuestionId(null)
    } else {
      setCurrentQuestionId(nextId)
    }
  }

  useKeyContol({
    rightEvent: handleNext,
    leftEvent: () => {
      console.log('← (ArrowLeft) が押されました')
    }
  })

  // 選択肢のクリック・テキスト入力の変更を拾うためのハンドラ
  const handleAnswer = (questionId: string, value: string, isDate?: boolean) => {
    // 既存のanswersをコピーして変更
    setAnswers((prev: AnswersProps) => ({
      ...prev,
      [questionId]: isDate ? convertDate(value) : value
    }))
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentQuestionId('q0')
  }
  
  return (
    <Layout title="初回お礼メール">
      <ProgressBar currentQuestion={currentQuestion} />

      <div className="my-5">
        {currentQuestionId && currentQuestion ? (
          <>
            <AnswerField
              question={currentQuestion}
              answers={answers}
              handleAnswerChange={handleAnswer}
            />
            <br />
            <Button variant="outline" onClick={handleNext}>
              次へ
            </Button>
          </>
        ) : (
          <Result answers={answers} handleReset={handleReset} />
        )}
      </div>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </Layout>
  )
}