import { Input } from './ui/input'
import Options from './Options'
import { DatePicker } from './DatePicker'

export function AnswerField({ question, answers, handleAnswerChange }) {
  const { id, questionText, type, options } = question
  const userAnswer = answers[id] || '' // 既に答えていれば反映

  const render = () => {
    if (type === 'choice') {
      return (
        <div>
          <p>{questionText}</p>
          <Options id={id} options={options} onChange={handleAnswerChange} />
        </div>
      )
    }
    if (type === 'date') {
      return (
        <div>
          <p>{questionText}</p>
          <DatePicker id={id} onSelect={handleAnswerChange} />
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
