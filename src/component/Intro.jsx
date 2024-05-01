import {React,useState} from 'react'


export default function Intro() {
    const [count,setCount] = useState(0)
    const changeIncrement=()=>{
        setCount((prevCount)=>prevCount  + 1)
    }
    const changeDecrement=()=>{
        setCount(prevCount=>prevCount
            - 1)
    }
  return (
    <div>
        <h1>Intro</h1>

        <button onClick={changeDecrement}> - </button>
        
        <span>{count}</span>

        <button onClick={changeIncrement}> + </button>
        </div>
  )
}
