import { Input } from './ui/input'
import Options from './Options'
import { formatToYmd } from '@/lib/date'
import { AnswersProps, QuestionProps } from '@/commonInterfaces/interfaces'

export function AnswerField({ question, answers, handleAnswerChange }: { question: QuestionProps, answers: AnswersProps, handleAnswerChange: (id: string, value: string, isDateTime?: boolean) => void }) {
  const { id, questionText, type, options } = question
  let userAnswer = answers[id] || '' // 既に答えていれば反映

  const render = () => {
    if (type === 'choice') {
      return (
        <div>
          <p>{questionText}</p>
          <Options id={id} options={options || []} onChange={handleAnswerChange} />
        </div>
      )
    }
    if (type === 'date') {
      if (!userAnswer) {
        userAnswer = formatToYmd(new Date())
      }
      return (
        <div>
          <p>{questionText}</p>
          <Input
            type="date"
            value={userAnswer}
            required
            autoFocus
            onChange={(e) => handleAnswerChange(id, e.target.value)}
          />
        </div>
      )
    }
    if (type === 'date-time') {
      // if (!userAnswer) {
      //   userAnswer = formatToYmd(new Date(), true)
      // }
      return (
        <div>
          <p>{questionText}</p>
          <Input
            type="datetime-local"
            value={userAnswer}
            required
            autoFocus
            onChange={(e) => handleAnswerChange(id, e.target.value, true)}
          />
        </div>
      )
    }

    return (
      <div>
        <p>{questionText}</p>
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

  return render()
}
