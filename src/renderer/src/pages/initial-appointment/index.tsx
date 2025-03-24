import { AnswerField } from '@/components/AnswerField'
import Layout from '@/components/Layout'
import ProgressBar from '@/components/ProgressBar'
import Result from '@/components/Result'
import { Button } from '@/components/ui/button'
import { inits } from '@/data/questions/initialAppointment'
import { useKeyContol } from '@/hooks/useKeyContol'

import { useState } from 'react'

const getQuestionById = (questions, id) => {
  return questions.find((q) => q.id === id)
}

export default function InitialAppointment() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>('q0')
  const [answers, setAnswers] = useState({})
  const currentQuestion = getQuestionById(inits, currentQuestionId)

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
  const handleAnswer = (questionId, value) => {
    // 既存のanswersをコピーして変更
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
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
        {currentQuestionId ? (
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
