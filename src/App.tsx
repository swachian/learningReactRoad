import { useState, useEffect, useReducer, ReactNode, FC } from 'react'
// import * as React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import Check from "./assets/check.svg?react";


// const list2 = [
//   {
//   title: 'React',
//   url: 'https://reactjs.org/',
//   author: 'Jordan Walke',
//   num_comments: 3,
//   points: 4,
//   objectID: 0,
//   },
//   {
//   title: 'Redux',
//   url: 'https://redux.js.org/',
//   author: 'Dan Abramov, Andrew Clark',
//   num_comments: 2,
//   points: 5,
//   objectID: 1,
// },
// ]

type Story = {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number
}

type Action = 
  { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'DELETE_STORY'; payload: Story }
  | { type: 'FILTER_STORY'; payload: string }


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

function App() {
  const [count, setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState<string>('')

  const storiesReducer = (stories: Story[] , action: Action) => {
    switch (action.type) {
      case 'SET_STORIES':
        return action.payload
      case 'DELETE_STORY':
        return stories.filter(s => s != action.payload)
      case 'FILTER_STORY':
        return stories.filter(s => s.title.includes(action.payload))
      default:
        throw new Error(`Invalid action ${action}`)
    }
  }


  const [searchedStories, setSearchedStories] = useReducer(storiesReducer, [])

  const removeOneItem = (item: Story) => {
    setSearchedStories({type: 'DELETE_STORY', payload: item})
  }

  useEffect(() => {
    // getAyncData(currentValue).then((data) => {
    //   setSearchedStories({type: 'SET_STORIES', payload: data})
      
    // })

    const fetch = async () => {
      const data = await getAyncData(currentValue)
      setSearchedStories({type: 'SET_STORIES', payload: data})
    }
    
    fetch()

  }, [currentValue])

  useEffect(() => {

    const fetch = async () => {
      const data = await getAyncData()
      setSearchedStories({type: 'SET_STORIES', payload: data})
    }
    
    fetch()

  }, [])

  async function getAyncData(param='react') {
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve({list2}), 2000)
    // })

    // return fetch(`${API_ENDPOINT}${param}`)
    //   .then(response => response.json())
    //   .then(data => data.hits)
    const response = await fetch(`${API_ENDPOINT}${param}`)
    const json = await response.json()
    return json.hits
  }

  return ( 
    <div className={styles.container}>
    {/* <title>{title}</title> */}

      <div>
        <a href="https://vite.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank"> 
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <List  list={searchedStories} removeOneItem={removeOneItem} />


      <Search currentValue={currentValue} setCurrentValue={setCurrentValue}>
        Search: &nbsp;&nbsp;
      </Search>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

type SearchProps = {
  currentValue: string, 
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>, 
  children: ReactNode;
}

const Search: FC<SearchProps> =  ({currentValue, setCurrentValue, children}) => {
  console.log('Search Component')
  
  function handleChange() {
    const searchBox = document.querySelector("#search") as HTMLInputElement
    console.log(searchBox)
    setCurrentValue(searchBox?.value)
    
  }
  return (
    <div>
    <label htmlFor="search">{children}</label> 
    
    <input id="search" type="text" name="search" />
    <button onClick={handleChange} className={`${styles.button} ${styles.buttonLarge}`}><Check height="18px" width="18px" /></button>
    <p>{currentValue}</p>
    </div>
  )
}

type ListProps = {
  list: Story[],
  removeOneItem: (item: Story) => void
}
const List: FC<ListProps> = ({list, removeOneItem}) => {
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
const Item: FC<ItemProps> = ({element, removeOneItem}) => {
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

export default App
