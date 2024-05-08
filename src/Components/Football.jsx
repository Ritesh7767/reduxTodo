import React, { useState } from 'react'
import { useDataQuery } from '../redux/football'
import { useDispatch } from 'react-redux'

const Football = () => {

  let [number, setNumber] = useState(1)
  const {data, error, isLoading, isFetching, isSuccess} = useDataQuery(number)
  const dispatch = useDispatch()

  const handleClick = page => setNumber(page)
  return (
    <>
      <h1 className='text-black mt-12 m-auto font-bold text-lg text-center'>{isLoading && 'Loading...' || isFetching && 'Fetching Data'}</h1>
      <table className='w-4/5 text-center text-white m-auto border-2 border-sky-700'>
        <thead className='bg-sky-700'>
          <tr>
            <th>Competition</th>
            <th>Round</th>
            <th>Team 1</th>
            <th>Team 1 Goals</th>
            <th>Team 2</th>
            <th>Team 2 Goals</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody className='text-black font-bold '>
          {data?.data?.map((ele, i) => {
            const {competition, round, team1, team1goals, team2, team2goals, year} = ele
            return (
              <tr className='hover:bg-sky-500 hover:text-white transition-colors'>
                <td>{competition}</td>
                <td>{round}</td>
                <td>{team1}</td>
                <td>{team1goals}</td>
                <td>{team2}</td>
                <td>{team2goals}</td>
                <td>{year}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="container m-auto text-end mt-2">
        <button className='hover:bg-sky-700 hover:text-white transition-all mr-5 border w-7 border-sky-700 ' onClick={() => handleClick(1)}>1</button>
        <button className='hover:bg-sky-700 hover:text-white transition-all mr-5 border w-7 border-sky-700 ' onClick={() => handleClick(2)}>2</button>
        <button className='hover:bg-sky-700 hover:text-white transition-all mr-5 border w-7 border-sky-700 ' onClick={() => handleClick(3)}>3</button>
        <button className='hover:bg-sky-700 hover:text-white transition-all border w-7 border-sky-700 ' onClick={() => handleClick(4)}>4</button>
      </div>
    </>
  )
}

export default Football