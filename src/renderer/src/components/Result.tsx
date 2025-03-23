import TextContentArea from './MailTexts'
import { templateContinue, templateDenied } from '@/data/answers/siidSales'
import { Button } from './ui/button'

export default function Result({ answers, handleReset }: { answers: any, handleReset: () => void }) {
    
  const renderResult = () => {
    if (answers['q3'] === 'お断り') {
      return (
        <TextContentArea
          textContent={templateDenied({
            name: answers['q0'],
            time: answers['q1'],
            url: answers['q2']
          })}
        />
      )
    }
    if (answers['q3'] === '次回打ち合わせ') {
        return (
          <TextContentArea
            textContent={templateContinue({
                name: answers['q0'],
                time: answers['q1'],
                url: answers['q2'],
                date: answers['q4_continued']
            })}
          />
        )
      }
    return <div>Others</div>
  }

  return (
    <>
      {renderResult()}
      <br />
        <Button variant="outline">
            保存
        </Button>
        <Button variant="outline" onClick={handleReset}>
            もう一度はじめから
        </Button>
      <br />
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </>
  )
}
