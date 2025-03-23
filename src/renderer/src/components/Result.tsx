import TextContentArea from './MailTexts'
import { templateDenied } from '@/data/answers/siidSales'
import { Button } from './ui/button'

export default function Result({ answers, handleReset }: { answers: any, handleReset: () => void }) {
    
  const renderResult = () => {
    if (answers['q2'] === 'お断り') {
      return (
        <TextContentArea
          textContent={templateDenied({
            name: answers['q0'],
            url: answers['q3_denied'],
            time: answers['q1']
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
