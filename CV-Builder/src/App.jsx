import { useState } from 'react'
import './App.css'
import { Header, Summary, Work} from './components'


function App() {

  const [isEditable, setIsEditable] = useState(true)

  return (
    <>
      <Header isEditable={isEditable} setIsEditable={setIsEditable}/>
      <Summary isEditable={isEditable}/>
      <Work isEditable={isEditable}/>
    </>
  )
}

export default App
