import Layout from '@/components/Layout'
import { Checkbox } from '@/components/ui/checkbox'

import { useReward } from 'react-rewards';
import { todoList, todoListProps } from './todoList';
import { useState } from 'react';



export default function Checks() {
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
  const [checkedItems, setCheckedItems] = useState<todoListProps[]>(todoList);


  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    // 現在の配列をコピーし、該当indexだけ更新
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index].checked = checked;
    setCheckedItems(newCheckedItems);

    // すべてtrueになったら"OK"と表示
    const allChecked = newCheckedItems.every(value => value);
    if (allChecked) {
      console.log("OK");
    }
  };

  return (
    <Layout title="チェック事項">
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={todoItem.id} className='mb-2'>
            <Checkbox id={todoItem.id} checked={checkedItems[index].checked} onCheckedChange={() => handleChange(index)} />
            <label
              htmlFor={todoItem.id}
              className="ml-1"
            >
              {todoItem.label}
            </label>
          </li>
        ))}
      </ul>
      <button
    disabled={isAnimating}
    onClick={reward}
>
    <span id="rewardId" />
    🎉
</button>
    </Layout>
  )
}
