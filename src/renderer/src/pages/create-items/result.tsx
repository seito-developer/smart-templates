import { Button } from '@/components/ui/button'
import { templateContinue, templateDenied } from './answers'
import TableData from '@/components/Table'
import { generateTableData } from './tableData/table-1'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  
  const obj = generateTableData()
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  return (
    <>
      <p className='font-bold'>Table 1</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>Table 1</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>Table 1</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>Table 1</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <div className='flex gap-2'>
        <Button variant="outline" disabled>保存</Button>
        <Button variant="outline" onClick={handleReset}>
          もう一度はじめから
        </Button>
      </div>
    </>
  )
}
