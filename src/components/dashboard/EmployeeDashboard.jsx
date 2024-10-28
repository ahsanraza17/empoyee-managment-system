import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import Tasklist from "../tasklist/Tasklist";

const EmployeeDashboard = ({data}) => {

  const [tasksOfEmployee, setTasksOfEmployee] = useState(data);

  useEffect(() => {
    if(data){
      localStorage.setItem("employeeTasks", JSON.stringify(data));
    }
    else{
      const employeeTasks = JSON.parse(localStorage.getItem("employeeTasks"))
      if(employeeTasks){
        setTasksOfEmployee(employeeTasks)
      }
    }
  }, [data])
    
  return (
    <section className="w-full px-10 my-10">
      <div className="w-full flex flex-col gap-12">
        <Header data={tasksOfEmployee} />
        <TaskListNumber data={tasksOfEmployee} />
        <Tasklist data={tasksOfEmployee} />
      </div>
    </section>
  );
};

export default EmployeeDashboard;
