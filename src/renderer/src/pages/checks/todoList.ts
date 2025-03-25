export interface todoListProps {
    id: string,
    label: string,
    checked: boolean
}

export const todoList:todoListProps[] = [
    {
      id: '1',
      label: 'Sheet 1への追加',
      checked: false
    },{
      id: '2',
      label: 'Sheet 1, Sheet 2, Sheet 3, いずれもExecステータスをTRUEに変更',
      checked: false
    },{
      id: '3',
      label: 'ItemContent, の画像を作成し、/itemType/xxxに保存してコミット',
      checked: false
    },{
      id: '4',
      label: 'ItemThumnbnail, の画像を作成し、/tumnbaniakl/xxxに保存してコミット',
      checked: false
    }
  ]