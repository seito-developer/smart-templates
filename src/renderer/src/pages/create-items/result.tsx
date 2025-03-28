import { Button } from '@/components/ui/button'
import TableData from '@/components/Table'
import { generateItemGroupTable } from './tableData/item_group'
import { generateItemItemTypeTable } from './tableData/item_item_type'
import { getKeysAndValues } from '@/lib/utils'

export default function Result({
  answers,
  handleReset
}: {
  answers: any
  handleReset: () => void
}) {
  const itemGroupTable = getKeysAndValues(generateItemGroupTable(answers))
  const itemItemTypeTable = getKeysAndValues(generateItemItemTypeTable(answers))

  return (
    <>
    {answers['item_group_q0'] === 'はい' && (
      <>
      <p className='font-bold'>item_group</p>
      <TableData thead={itemGroupTable.keys} tbody={itemGroupTable.values} />
      <br />
      </>
    )}
      <p className='font-bold'>item_item_type</p>
      <TableData thead={itemItemTypeTable.keys} tbody={itemItemTypeTable.values} />
      <br />

      {/* <p className='font-bold'>shop_sell_item</p>
      <TableData thead={keys} tbody={values} />
      <br />
      <p className='font-bold'>nft_metdata</p>
      <TableData thead={keys} tbody={values} /> */}
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
