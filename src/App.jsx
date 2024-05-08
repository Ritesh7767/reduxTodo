import { useState } from 'react'
import Form from './Components/Form'
import Table from './Components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      <Table/>
    </>
  )
}

export default App
