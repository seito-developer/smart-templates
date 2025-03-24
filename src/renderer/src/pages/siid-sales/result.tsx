import TextContentArea from '@/components/MailTexts'
import { Button } from '@/components/ui/button'
import { templateAccepted } from '@/data/answers/templateAccepted'
import { templateConsidered, templateDenied } from './answers'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const renderResult = () => {
    if (answers['q2'] === 'お断り') {
      return (
        <TextContentArea
          textContent={templateDenied({
            name: answers['q0'],
            time: answers['q1'],
          })}
        />
      )
    }
    if (answers['q2'] === '検討') {
      return (
        <TextContentArea
        textContent={templateConsidered({
          name: answers['q0'],
          time: answers['q1'],
          discount_limitation: answers['q3_considered'],
          isReskill: answers['q5_accepted']
        })}
      />
      )
    }
    return (
      <TextContentArea
        textContent={templateAccepted({
          name: answers['q0'],
          time: answers['q1'],
          course: answers['q3_accepted'],
          start_date: answers['q4_accepted'],
          isReskill: answers['q5_accepted']
        })}
      />
    )
  }

  return (
    <>
      <p className='py-2 font-bold'>本題</p>
      {renderResult()}
      <br />
      <Button variant="outline" disabled>保存</Button>
      <Button variant="outline" onClick={handleReset}>
        もう一度はじめから
      </Button>
    </>
  )
}
