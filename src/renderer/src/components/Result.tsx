import TextContentArea from './MailTexts'
import { templateContinue, templateDenied } from '@/data/answers/siidSales'
import { Button } from './ui/button'
import { templateAccepted } from '@/data/answers/templateAccepted'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const renderResult = () => {
    if (answers['q3'] === 'お断り') {
      return (
        <TextContentArea
          textContent={templateDenied({
            name: answers['q0'],
            time: answers['q1'],
            sheet_url: answers['q2']
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
            sheet_url: answers['q2'],
            date: answers['q4_continued']
          })}
        />
      )
    }
    return (
      <TextContentArea
        textContent={templateAccepted({
          name: answers['q0'],
          time: answers['q1'],
          sheet_url: answers['q2'],
          course: answers['q4_accepted'],
          start_date: answers['q5_accepted'],
          isReskill: answers['q6_accepted']
        })}
      />
    )
  }

  return (
    <>
      {renderResult()}
      <br />
      <Button variant="outline">保存</Button>
      <Button variant="outline" onClick={handleReset}>
        もう一度はじめから
      </Button>
    </>
  )
}
