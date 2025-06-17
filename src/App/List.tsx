import { useState } from 'react'
import styles from './App.module.css'
import { Story } from './types'
import { SyntheticEvent } from 'react'
import { orderBy } from 'lodash';

type ListProps = {
  list: Story[],
  removeOneItem: (item: Story) => void
}

enum Direction {
  Asc = "asc",
  Desc = "desc",
  None = "none",
}

const directionCycle: Record<Direction, Direction> = {
  [Direction.Asc]: Direction.Desc,
  [Direction.Desc]: Direction.None,
  [Direction.None]: Direction.Asc
};

function nextDirection(d: Direction): Direction {
  return directionCycle[d];
}

type SortInfo = {
  sortBy: string,
  direction: Direction
}
const List = ({list, removeOneItem}: ListProps) => {
  const [sortInfo, setSortInfo] = useState<SortInfo>({sortBy: 'title', direction: Direction.None})



  const sortList = (sortInfo: SortInfo) => {
    console.log(sortInfo)
    let result
    if (sortInfo.direction !== Direction.None) {
      result = orderBy(list, ['title'], [sortInfo.direction])
    } else {
      result = list
    }
    return result
  }
  const sortedList = sortList(sortInfo)

  if (!sortedList || list.length === 0) {
    return <div>暂无数据，请尝试其他搜索条件</div>; // 空状态提示
  }
  const handleButtonClick = (e: SyntheticEvent) => {
    console.dir( e.target)
    if (e.target instanceof HTMLElement) {
      const sortBy = e.target.dataset['sortBy']!
      const direction: Direction = e.target.dataset['sortByDirection'] as Direction
      const sortByDirection = nextDirection(direction)
      e.target.dataset['sortByDirection'] = sortByDirection
      setSortInfo({sortBy: sortBy, direction: sortByDirection})
    }
  }
  return (
    <h1 className={styles.headlinePrimary}>
      <ul>
        <button data-sort-by="title" data-sort-by-direction={Direction.None} onClick={handleButtonClick}>sort by title</button>
        {sortedList.map(e => 
          <Item key={e.objectID} element={e} removeOneItem={removeOneItem} />
        )}
      </ul>
    </h1>
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