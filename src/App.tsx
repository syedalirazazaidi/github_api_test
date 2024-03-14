import { useState } from 'react'

import './App.css'
import ListUser from './components/listUSer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ListUser/>
    </>
  )
}

export default App
