import styles from './App.module.css'
import { useState} from 'react'

import Check from "../assets/check.svg?react";
import { ReactNode } from 'react'


type SearchProps = {
  currentValue: string, 
  onChange: (text: string) => void, 
  onSubmit: () => void,
  children: ReactNode;
}

const Search = ({currentValue, onChange, onSubmit, children} : SearchProps) => {
  const [histories, setHistories] = useState<string[]>([])
  
  const handleSubmit = () => {
    if (!histories.includes(currentValue)) {
      histories.push(currentValue)
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
    
    <input id="search" type="text" name="search" value={currentValue} onChange={(e) => onChange(e.target.value)}/>
    <button onClick={handleSubmit} className={`${styles.button} ${styles.buttonLarge}`}><Check height="18px" width="18px" /></button>
    <p>{currentValue}</p>
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