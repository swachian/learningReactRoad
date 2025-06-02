import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  first: 'New',
  second: 'start2' 
}

let list = []

const list2 = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},
]

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

function App() {
  const [count, setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState('')

  useEffect(() => {
    console.log(`currentValue is changed to ${currentValue}`)
  }, [currentValue])


  const storiesReducer = (stories, action) => {
    switch (action.type) {
      case 'SET_STORIES':
        return action.payload
      case 'DELETE_STORY':
        return stories.filter(s => s != action.payload)
      default:
        throw new Error(`Invalid action ${action}`)
    }
  }


  const [searchedStories, setSearchedStories] = useReducer(storiesReducer, [])

  const removeOneItem = (item) => {
    setSearchedStories({type: 'DELETE_STORY', payload: item})
    
  }

  useEffect(() => {
    getAyncData().then((data) => {
      setSearchedStories({type: 'SET_STORIES', payload: data})
    })
  }, [])

  function getAyncData() {
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve({list2}), 2000)
    // })

    return fetch(`${API_ENDPOINT}react`)
      .then(response => response.json())
      .then(data => data.hits)
  }

  return ( 
    <>
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
    </>
  )
}

function Search({currentValue, setCurrentValue, children}) {
  console.log('Search Component')
  
  function handleChange(e) {
    setCurrentValue(e.target.value)
    
  }
  return (
    <div>
    <label htmlFor="search">{children}</label> 
    
    <input type="text" name="search" onChange={handleChange} />
    <p>{currentValue}</p>
    </div>
  )
}

function List({list, removeOneItem}) {
  console.log('List Component')
  if (!list || list.length === 0) {
    return <div>暂无数据，请尝试其他搜索条件</div>; // 空状态提示
  }
  return (
    <h1>{list.map(e => 
      <Item key={e.objectID} element={e} removeOneItem={removeOneItem} />
  )}</h1>
  )
}

function Item({element, removeOneItem}) {
  console.log('Item Component')

  function removeLi(e) {
    console.dir(e.target)
    removeOneItem(element)
  }
  return (
    <li key={element.objectID}> 
      <span> {element.title}</span>
      <span> {element.author}</span> 
      <span> {element.points}</span>
      <span> <button data-id={element.objectID} onClick={removeLi}>delete</button></span>
    </li>
  )
}

export default App
