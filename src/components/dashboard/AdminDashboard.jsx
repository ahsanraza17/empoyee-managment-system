import React, { useState, useEffect } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ data }) => {

  const [adminTasks, setAdminTasks] = useState(data);

  useEffect(() => {
    if(data){
      localStorage.setItem("adminTasks", JSON.stringify(data));
    }
    else{
      const adminTasks = JSON.parse(localStorage.getItem("adminTasks"))
      if(adminTasks){
        setAdminTasks(adminTasks)
      }
    }
  }, [data])

  return (
    <section className="w-full px-10 my-10 flex flex-col gap-10">
      <Header data={adminTasks} />
      <CreateTask />
      <AllTask />
    </section>
  );
};

export default AdminDashboard;
