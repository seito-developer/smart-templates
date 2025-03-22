import { Input } from "./ui/input";

export function AnswerField({question, answers, handleAnswerChange}) {

  const { id, questionText, type, options } = question
  const userAnswer = answers[id] || '' // 既に答えていれば反映
  console.log('question:', question);

  const render = () => {
    if (type === 'choice') {
      return (
        <div>
          <p>{questionText}</p>
          {options.map((opt) => (
            <label key={opt} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name={id}
                value={opt}
                checked={userAnswer === opt}
                onChange={(e) => handleAnswerChange(id, e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>
      )
    } else if (type === 'text') {
      return (
        <div>
          <p>{questionText}</p>
          <Input type="text" value={userAnswer} required onChange={(e) => handleAnswerChange(id, e.target.value)} />
        </div>
      )
    } else {
      return <div>未知の質問タイプ: {type}</div>
    }
  }

  return render()
}
