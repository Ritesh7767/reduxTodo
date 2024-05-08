import { useState } from 'react'
import Form from './Components/Form'
import Table from './Components/Table'
import { useSelector } from 'react-redux'
import { useDataQuery } from './redux/football'
import Football from './Components/Football'

function App() {

  return (
    <>
      <Form/>
      <Table/>
      <Football/>
    </>
  )
}

export default App
