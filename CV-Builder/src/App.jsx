import { useState } from 'react'
import './App.css'
import {Header} from './components'


function App() {

  const [isEditable, setIsEditable] = useState(true)

  return (
    <>
      <Header isEditable={isEditable} setIsEditable={setIsEditable}/>
    </>
  )
}

export default App
