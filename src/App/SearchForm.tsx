import styles from './App.module.css'
import { useState, ReactNode} from 'react'

import Check from "../assets/check.svg?react";
import {  } from 'react'
import { SearchParam } from './types'


type SearchProps = {
  currentValue: SearchParam, 
  onChange: (text: string) => void, 
  onSubmit: () => void,
  children: ReactNode;
}

const Search = ({currentValue, onChange, onSubmit, children} : SearchProps) => {
  const [histories, setHistories] = useState<string[]>([])
  
  const handleSubmit = () => {
    if (!histories.includes(currentValue.param)) {
      histories.push(currentValue.param)
      if (histories.length > 5) {
        histories.shift()
      }
      setHistories(histories)
    }
    console.log(histories)
    onSubmit()
  }
  return (
    <div>
    <label htmlFor="search">{children}</label> 
    
    <input id="search" type="text" name="search" value={currentValue.param} onChange={(e) => onChange(e.target.value)}/>
    <button onClick={handleSubmit} className={`${styles.button} ${styles.buttonLarge}`}><Check height="18px" width="18px" /></button>
    <p>{currentValue.param}</p>
    {
      histories.map(history => 
        <button 
        key={history} 
        onClick={() => {onChange(history), handleSubmit()}}>{history}</button>
      )}
    </div>
  )
}

export { Search } 