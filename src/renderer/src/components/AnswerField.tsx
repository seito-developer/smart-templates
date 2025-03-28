import { Input } from './ui/input'
import Options from './Options'
import { QuestionProps } from '@/pages/create-items/questions/questions'
import { Textarea } from './ui/textarea'

export function AnswerField({ question, answers, handleAnswerChange } : {
  question: QuestionProps, answers: any, handleAnswerChange: (questionId: string, value: string) => void
}) {
  const { id, questionText, type, options, description, example } = question
  let userAnswer = answers[id] || '' // 既に答えていれば反映

  const renderFormElm = () => {
    if (type === 'choice') {
      return (
        <div>
          { options && <Options id={id} options={options} onChange={handleAnswerChange} /> }
        </div>
      )
    }
    if (type === 'number') {
      return (
        <div>
          <Input
            type="number"
            value={userAnswer}
            required
            autoFocus
            onChange={(e) => handleAnswerChange(id, e.target.value)}
          />
        </div>
      )
    }
    if (type === 'textarea') {
      return (
        <div>
          <Textarea required autoFocus onChange={(e) => handleAnswerChange(id, e.target.value)}>
            {userAnswer}
          </Textarea>
        </div>
      )
    }

    return (
      <div>
        <Input
          type="text"
          value={userAnswer}
          required
          autoFocus
          onChange={(e) => handleAnswerChange(id, e.target.value)}
        />
      </div>
    )
  }

  return (
  <>
    <p>{questionText}</p>
    {description && <p className="text-sm my-1">{description}</p>}
    {example && <p className="text-sm text-gray-500 mb-2">例）{example}</p>}
    {renderFormElm()}
  </>
  )
}