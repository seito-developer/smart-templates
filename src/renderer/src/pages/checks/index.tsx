import Layout from '@/components/Layout'
import { Checkbox } from '@/components/ui/checkbox'

const todoList = [
  {
    id: '1',
    label: 'Sheet 1への追加'
  },{
    id: '2',
    label: 'Sheet 1, Sheet 2, Sheet 3, いずれもExecステータスをTRUEに変更'
  },{
    id: '3',
    label: 'ItemContent, の画像を作成し、/itemType/xxxに保存してコミット'
  },{
    id: '4',
    label: 'ItemThumnbnail, の画像を作成し、/tumnbaniakl/xxxに保存してコミット'
  }
]

export default function Checks() {
  return (
    <Layout title="チェック事項">
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id} className='mb-2'>
            <Checkbox id={todoItem.id} />
            <label
              htmlFor={todoItem.id}
              className="ml-1"
            >
              {todoItem.label}
            </label>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
