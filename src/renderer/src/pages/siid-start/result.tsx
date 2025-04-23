import TextContentArea from '@/components/MailTexts'
import { Button } from '@/components/ui/button'
import { templateOnClass, templateSpecialGifts, templateStarted } from './answers'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const renderResult = () => {
    return (
      <>
        <p className="py-2">1/3 開始準備のご案内（即日送信する）</p>
        <TextContentArea
          textContent={templateStarted({
            name: answers['q0'],
            studentId: answers['q1']
          })}
        />
        <br />
        <p className="py-2">2/3 オンクラス案内メール（受講開始日の8:00に送信予約</p>
        <TextContentArea
          textContent={templateOnClass({
            name: answers['q0']
          })}
        />
        {answers['q2'] === '有' && (
          <>
            <br />
            <p className="py-2">3/3 早期特典のご案内</p>
            <TextContentArea
              textContent={templateSpecialGifts({
                name: answers['q0']
              })}
            />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <p className="py-2 font-bold">本題</p>
      {renderResult()}
      <br />
      <Button variant="outline" disabled>
        保存
      </Button>
      <Button variant="outline" onClick={handleReset}>
        もう一度はじめから
      </Button>
    </>
  )
}
