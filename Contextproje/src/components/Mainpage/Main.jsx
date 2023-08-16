import React, { useContext } from 'react'
import { CountContext } from '../Context/Context'

function Main() {
const {count,countss,newCount}=useContext(CountContext)

  return (
    <div className='m-5'>
        <h1 className='m-5 p-5 fon-size-5' >{newCount}</h1>
        {/* <button className='btn btn-primary'>CREAT</button> */}
    </div>
  )
}

export default Main