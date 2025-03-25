import { Button } from '@/components/ui/button'
import { templateContinue, templateDenied } from './answers'
import TableData from '@/components/Table'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
      
  // const renderResult = () => {
  //   if (answers['q3'] === 'お断り') {
  //     return (
  //       <Table textContent="" />
  //       // <TextContentArea
  //       //   textContent={templateDenied({
  //       //     name: answers['q0'],
  //       //     time: answers['q1'],
  //       //     sheet_url: answers['q2']
  //       //   })}
  //       // />
  //     )
  //   }
  //   if (answers['q3'] === '次回打ち合わせ') {
  //     return (
  //       <TextContentArea
  //         textContent={templateContinue({
  //           name: answers['q0'],
  //           time: answers['q1'],
  //           sheet_url: answers['q2'],
  //           date: answers['q4_continued']
  //         })}
  //       />
  //     )
  //   }
  // }

  return (
    <>
      {/* {renderResult()} */}
      <TableData textContent="" />
      <br />
      <Button variant="outline" disabled>保存</Button>
      <Button variant="outline" onClick={handleReset}>
        もう一度はじめから
      </Button>
    </>
  )
}
