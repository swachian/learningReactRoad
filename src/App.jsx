import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  first: 'New',
  second: 'start2' 
}



function App() {
  const [count, setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState('na')

  const list = [
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
  ];

  const searchedStories = list.filter( l => !currentValue || l.title.includes(currentValue))
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
      <List list={searchedStories} />


      <Search currentValue={currentValue} setCurrentValue={setCurrentValue}/>
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

function Search(props) {
  console.log('Search Component')
  
  function handleChange(e) {
    props.setCurrentValue(e.target.value)
    
  }
  return (
    <div>
    <label htmlFor="search">Search</label> 
    
    <input type="text" name="search" onChange={handleChange}/>
    <p>{props.currentValue}</p>
    </div>
  )
}

function List(props) {
  console.log('List Component')

  return (
    <h1>{props.list.map(e => 
      <Item key={e.objectID} element={e}/>
  )}</h1>
  )
}

function Item(props) {
  console.log('Item Component')

  const e = props.element
  return (
    <li key={e.objectID}> 
      <span> {e.title}</span>
      <span> {e.author}</span> 
      <span> {e.points}</span>
    </li>
  )
}

export default App
