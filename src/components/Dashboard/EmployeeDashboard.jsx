import React, { useContext } from 'react'
import Header from '../../others/Header';
import TaskListInfo from '../../others/TaskListInfo';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProviderContext';

const EmployeeDashboard = ({ data, changeUser }) => {
  
  const [ userData, setUserData, updateUserData ] = useContext(AuthContext);

  const handleAcceptTask = (taskId) => {
    const updated = userData.map((emp) => {
      if (emp.id === data.id) {
        const tasks = emp.tasks.map(task=> task.id===taskId ? {...task,newTask:false,active:true,completed:false,failed:false}: task)

        const counts = {
          newTask: tasks.filter(t => t.newTask).length,
          active: tasks.filter(t => t.active).length,
          completed: tasks.filter(t => t.completed).length,
          failed: tasks.filter(t => t.failed).length,
        }
        return {
          ...emp,
          tasks,
          taskCount:counts
        }
      }
      return emp;
    })
    updateUserData(updated)
  }

  const handleCompleteTask = (taskId) => {
    const updated = userData.map((emp) => {
      if (emp.id === data.id) {
        const tasks = emp.tasks.map(task=> task.id===taskId ? {...task,newTask:false,active:false,completed:true,failed:false}: task)
         
        const counts = {
          newTask: tasks.filter(t => t.newTask).length,
          active: tasks.filter(t => t.active).length,
          completed: tasks.filter(t => t.completed).length,
          failed: tasks.filter(t => t.failed).length,
        }
        return {
          ...emp,
          tasks,
          taskCount: counts
        }
      }
      return emp;
    })
    updateUserData(updated)
  }

  const hanldeFailTask = (taskId) => {
    const updated = userData.map((emp) => {
      if (emp.id === data.id) {
        const tasks = emp.tasks.map(task=> task.id===taskId ? {...task,newTask:false,active:false,completed:false,failed:true}: task)

         const counts = {
          newTask: tasks.filter(t => t.newTask).length,
          active: tasks.filter(t => t.active).length,
          completed: tasks.filter(t => t.completed).length,
          failed: tasks.filter(t => t.failed).length,
        }
        return {
          ...emp,
          tasks,
          taskCount:counts
        }
      }
      return emp;
    })
    updateUserData(updated);
  }

  const currentEmployee = userData?.find(emp => emp.id === data.id) || data;
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
    
      <Header data={ currentEmployee} changeUser={changeUser} />
      <TaskListInfo data={ currentEmployee}/>
      <TaskList data={currentEmployee} onAccept={handleAcceptTask} onComplete={handleCompleteTask} onFail={hanldeFailTask} />
    </div>
  )
}

export default EmployeeDashboard