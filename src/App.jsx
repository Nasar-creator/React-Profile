import { useState } from 'react'
import Intro from "./component/Intro"
import './App.css'
import Student from './component/Student'
import Usercard from './component/Usercard'

function App() {


  return (
    <>
    <Usercard />
      {/* <Intro />
      <Student name="Nasar" age={20} standard={12}/>
      <Student name="Nasar" /> */}
    </>
  )
}

export default App
