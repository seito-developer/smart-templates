import { Button } from '@/components/ui/button'
import TableData from '@/components/Table'
import { generateTableData } from './tableData/item_group'

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
      <p className='font-bold'>item_group</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>item_item_type</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>shop_sell_item</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>nft_metdata</p>
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
