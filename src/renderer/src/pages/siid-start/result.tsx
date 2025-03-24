import TextContentArea from '@/components/MailTexts'
import { Button } from '@/components/ui/button'
import { templateStarted } from './answers'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const renderResult = () => {
    return (
      <TextContentArea
        textContent={templateStarted({
          name: answers['q0'],
          studentId: answers['q1'],
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
