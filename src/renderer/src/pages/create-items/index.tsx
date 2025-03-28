import { useState } from 'react'
import { AnswerField } from '@/components/AnswerField'
import Layout from '@/components/Layout'
import ProgressBar from '@/components/ProgressBar'
import { Button } from '@/components/ui/button'
import { useKeyContol } from '@/hooks/useKeyContol'
import { getQuestionById } from '@/lib/utils'
import Result from './result'
import { allQuestions } from './questions/questions'
import { validateSymbolTokenId } from '@/lib/validations'

export default function CreateItems() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>('item_group_q0')
  const [answers, setAnswers] = useState({})
  const [error, setError] = useState<string | null>(null)
  const currentQuestion = getQuestionById(allQuestions, currentQuestionId)
  
  const handleNext = () => {
    if (!currentQuestion) return
    const userAnswer = answers[currentQuestion.id]
    console.log('currentQuestion.nextMapping', currentQuestion);
    // --- 必須回答のバリデーション ---
    if (!userAnswer || (typeof userAnswer === 'string' && userAnswer.trim() === '')) {
      alert('回答を入力（または選択）してください。')
      return
    }

    // エラーがある場合
    if(error) {
      alert('入力された値にエラーがあります。')
      return
    }

    let nextId = null
    if (currentQuestion.type === 'choice') {
      const selectedValue = answers[currentQuestion.id]
      nextId = currentQuestion.nextMapping[selectedValue]
    } else {
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

  const renderError = () => {
    if(currentQuestionId === 'item_item_type_q2') {
      return validateSymbolTokenId(answers, answers[currentQuestion.id])
    }
  }
  
  return (
    <Layout title="シートのデータを自動生成">
      <ProgressBar currentQuestion={currentQuestion} />

      <div className="my-5">
        {currentQuestionId ? (
          <>
            <AnswerField
              question={currentQuestion}
              answers={answers}
              handleAnswerChange={handleAnswer}
            />
            {error && renderError()}
            <br />
            <Button variant="outline" onClick={handleNext}>
              次へ
            </Button>
            <br />
            <pre>{JSON.stringify(answers, null, 2)}</pre>
          </>
        ) : (
          <Result answers={answers} handleReset={handleReset} />
        )}
      </div>
    </Layout>
  )
}