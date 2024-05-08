import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../redux/dataProvider'
import {v4 as uuidv4} from 'uuid'

const Form = () => {

    let [task, setTask] = useState('')
    let dispatch = useDispatch()

    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleSubmit = event => {
        
        event.preventDefault()
        dispatch(ADD_TODO(task))
        setTask('')
    }


  return (
    <>
        <form onSubmit={handleSubmit} className='border bg-sky-500 text-white flex flex-col w-1/3 m-auto items-center gap-4 '>
            <h1 className='font-bold text-xl'>ADD TODO</h1>
            <label className='font-bold'>Enter your task title</label>
            <input type="text" className='border p-3 :focus outline-none text-sky-700 rounded-lg w-4/5 h-9 ' onChange={handleChange} placeholder='Enter your task name here' value={task} required />
            <input type="submit" className='w-1/3 h-9 rounded-lg bg-white text-sky-700 hover:bg-sky-700 hover:text-white active:bg-teal-800 mb-4'/>
        </form>
    </>
  )
}

export default Form