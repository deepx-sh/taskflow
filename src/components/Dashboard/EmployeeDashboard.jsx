import React from 'react'
import Header from '../../others/Header';
import TaskListInfo from '../../others/TaskListInfo';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h2>{data.id }</h2>
      <Header data={ data} />
      <TaskListInfo data={ data}/>
      <TaskList data={ data}/>
    </div>
  )
}

export default EmployeeDashboard