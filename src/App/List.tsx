import styles from '../App.module.css'
import { Story } from './types'

type ListProps = {
  list: Story[],
  removeOneItem: (item: Story) => void
}
const List = ({list, removeOneItem}: ListProps) => {
  console.log('List Component')
  if (!list || list.length === 0) {
    return <div>暂无数据，请尝试其他搜索条件</div>; // 空状态提示
  }
  return (
    <h1 className={styles.headlinePrimary}>{list.map(e => 
      <Item key={e.objectID} element={e} removeOneItem={removeOneItem} />
  )}</h1>
  )
}
type ItemProps = {
  element: Story,
  removeOneItem: (item: Story) => void
}
const Item = ({element, removeOneItem}: ItemProps) => {
  console.log('Item Component')

  function removeLi() {
    removeOneItem(element)
  }
  return (
    <li key={element.objectID} className={styles.item}> 
      <span> {element.title}</span>
      <span> {element.author}</span> 
      <span> {element.points}</span>
      <span> <button data-id={element.objectID} onClick={removeLi}>delete</button></span>
    </li>
  )
}

export { List }