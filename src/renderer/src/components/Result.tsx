import TextContentArea from './MailTexts'
import { templateContinue, templateDenied } from '@/data/answers/initialAppointment'
import { Button } from './ui/button'
import { templateAccepted } from '@/data/answers/templateAccepted'
import { title } from '@/data/questions/initialAppointment'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const getTitle = () => {
    if (answers['q3'] === '承諾') {
      return title.accepted
    }
    else if (answers['q3'] === '次回打ち合わせ') {
      return title.continued
    } else {
      return title.others
    }
  }
      
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
      <p className='py-2 font-bold'>タイトル</p>
      <TextContentArea
        textContent={getTitle()}
      />
      <br />
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
