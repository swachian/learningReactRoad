import styles from './App.module.css'
import Check from "../assets/check.svg?react";
import { ReactNode } from 'react'


type SearchProps = {
  currentValue: string, 
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>, 
  children: ReactNode;
}

const Search = ({currentValue, setCurrentValue, children} : SearchProps) => {
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

export { Search } 