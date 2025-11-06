import React, { useContext } from 'react'
import Header from '../../others/Header';
import TaskListInfo from '../../others/TaskListInfo';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProviderContext';

const EmployeeDashboard = ({ data, changeUser }) => {
  
  const { userData, updateUserData } = useContext(AuthContext);

  const handleAcceptTask = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id == data.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, newTask: false, active: true };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask - 1,
            active: emp.taskCount.active + 1,
          }
        }
      }
      return emp;
    })
    updateUserData(updatedData)
  }

  const handleCompleteTask = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, active: false, completed: true };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            active: emp.taskCount.active - 1,
            completed: emp.taskCount.completed + 1,
          }
        }
      }
      return emp;
    })
    updateUserData(updatedData)
  }

  const hanldeFailTask = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.id === taskId) {
            return {...task,active:false,failed:true}
          }
          return task
        })

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            active: emp.taskCount.active - 1,
            failed: emp.taskCount.failed + 1,
          }
        }
      }
      return emp;
    })
    updateUserData(updatedData);
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