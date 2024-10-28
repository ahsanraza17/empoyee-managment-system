import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const {userData} = useContext(AuthContext);

  return (
    <div className='w-full bg-white/5 flex flex-col gap-3 p-5 rounded'>
      <div className='w-full bg-red-700 p-5 rounded flex items-center justify-between'>
        <h1 className='w-1/5 font-bold'>Name</h1>
        <h2 className='w-1/5 font-bold'>New Task</h2>
        <h3 className='w-1/5 font-bold'>Active Task</h3>
        <h5 className='w-1/5 font-bold'>Completed</h5>
        <h5 className='w-1/5 font-bold'>Falied</h5>
      </div>
      {userData?.employeeData.map((item, index) =>(
      <div key={index} className='w-full border-2 border-red-600 p-5 rounded flex items-center justify-between cursor-pointer hover:bg-red-600/10'>
        <h1 className='w-1/5 font-bold'>{item.name}</h1>
        <h2 className='w-1/5 font-bold'>{item.taskCount.newTask}</h2>
        <h3 className='w-1/5 font-bold'>{item.taskCount.active}</h3>
        <h5 className='w-1/5 font-bold text-green-500'>{item.taskCount.completed}</h5>
        <h5 className='w-1/5 font-bold text-red-600'>{item.taskCount.failed}</h5>
      </div>
      ))}
    </div>
  )
}

export default AllTask;