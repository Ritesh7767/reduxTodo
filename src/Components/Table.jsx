import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import { DELETE_TODO, UPDATE_TODO } from '../redux/dataProvider';

const Table = () => {

    let data = useSelector(state => state.dataProvider)
    const dispatch = useDispatch()


  return (
    <table className='m-auto mt-3 w-1/2 text-center text-white border'>
        <thead className='bg-sky-700'>
            <tr className=''>
                <th>SR NO.</th>
                <th>TASK</th>
                <th>STATUS</th>
                <th>Completed</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody className='bg-sky-500 font-bold'>
            {
                data?.map((ele, i) => {
                    const {id, task, status} = ele
                    return (
                        <tr key={id}>
                            <td>{ i+ 1}</td>
                            <td>{task}</td>
                            <td>{status ? 'Completed' : 'Pending'}</td>
                            <td><button onClick={() => dispatch(UPDATE_TODO(id))}>{status ? <IoArrowUndo/> : <IoCheckmarkDoneSharp/> }</button></td>
                            <td><button onClick={() => dispatch(DELETE_TODO(id))}><MdDelete/></button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Table