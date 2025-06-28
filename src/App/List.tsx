import { useState } from 'react'
import styles from './App.module.css'
import { Story } from './types'
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

  const handleSortChange = (sortInfo: SortInfo) => {
    setSortInfo(sortInfo)
  }

  const _sortList = (sortInfo: SortInfo) => {
    let result
    if (sortInfo.direction !== Direction.None) {
      result = orderBy([...list], [sortInfo.sortBy], [sortInfo.direction])
    } else {
      result = list
    }
    return result
  }
  const sortedList = _sortList(sortInfo)

  if (!sortedList || list.length === 0) {
    return <div>暂无数据，请尝试其他搜索条件</div>; // 空状态提示
  }


  
  
  return (
    <h1 className={styles.headlinePrimary}>
      <ul>
        <SortButton sortByText='title' sortInfo={sortInfo} onClick={handleSortChange}/>
        <SortButton sortByText='points' sortInfo={sortInfo} onClick={handleSortChange}/>

        {sortedList.map(e => 
          <Item key={e.objectID} element={e} removeOneItem={removeOneItem} />
        )}
      </ul>
    </h1>
  )
}

type SortButtonProps = {
  sortByText: string,
  sortInfo: SortInfo,
  onClick: (sortInfo: SortInfo) => void
}
const SortButton = ({sortByText, sortInfo, onClick}: SortButtonProps) => {
  const computeDirection = (text: string) => {
    if (sortInfo.sortBy == text) {
      return sortInfo.direction
    } else {
      return Direction.None
    }
  }

  const direction = computeDirection(sortByText)

  const handleSortSign = (text: string) : string => {
    if (sortInfo.sortBy == text) {
      let tailSign = ''
      switch (sortInfo.direction) {
        case Direction.Asc:
          tailSign = '↑'
          break
        case Direction.Desc:
          tailSign = '↓'
          break
        default:
          break
      }
      return `${text}${tailSign}`
    } else {
      return `${text}`
    }
  }

  const handleButtonClick = () => {
    const sortBy = sortByText
    const sortByDirection = nextDirection(direction)
    onClick({sortBy: sortBy, direction: sortByDirection})
  }

  return (
    <button data-sort-by={sortByText} data-sort-by-direction={direction} onClick={handleButtonClick}>{handleSortSign(sortByText)}</button>
  )
}
type ItemProps = {
  element: Story,
  removeOneItem: (item: Story) => void
}
const Item = ({element, removeOneItem}: ItemProps) => {
  function removeLi() {
    removeOneItem(element)
  }
  return (
    <li key={element.objectID} className={styles.item}> 
      <span> <a href={element.url}>{element.title}</a></span>
      <span> {element.author}</span> 
      <span> {element.points}</span>
      <span> <button data-id={element.objectID} onClick={removeLi}>delete</button></span>
    </li>
  )
}

export { List }