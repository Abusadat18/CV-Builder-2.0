import { useState } from 'react'
import './App.css'
import {Header, Summary} from './components'


function App() {

  const [isEditable, setIsEditable] = useState(true)

  return (
    <>
      <Header isEditable={isEditable} setIsEditable={setIsEditable}/>
      <Summary isEditable={isEditable}/>
    </>
  )
}

export default App
