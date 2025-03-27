import { Input } from './ui/input'
import Options from './Options'
import { formatToYmd } from '@/lib/date'
import { QuestionProps } from '@/pages/create-items/questions/questions'

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
    // if (type === 'date') {
    //   if (!userAnswer) {
    //     userAnswer = formatToYmd(new Date())
    //   }
    //   return (
    //     <div>
    //       <p>{questionText}</p>
    //       <Input
    //         type="date"
    //         value={userAnswer}
    //         required
    //         autoFocus
    //         onChange={(e) => handleAnswerChange(id, e.target.value)}
    //       />
    //     </div>
    //   )
    // }
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
