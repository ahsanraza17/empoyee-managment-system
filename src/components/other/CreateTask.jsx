import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const [popup, setPopup] = useState(false);
  const [assignValue, setAssignValue] = useState("");
  const [taskInp, setTaskInp] = useState({
    taskTitle: "",
    assignTo: "",
    taskDate: "",
    taskCategory: "",
    taskDescription: "",
    acitve: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInp((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(taskInp).every((values) => values !== "");
    if (!isFormValid) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    setAssignValue(taskInp.assignTo);
    setTaskInp({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      taskCategory: "",
      taskDescription: "",
    });

    setPopup(true);

    // Retrieve the current employee data from localStorage
    const employeeData = JSON.parse(localStorage.getItem("employees"));

    const updatedData = employeeData.map((employee) => {
      if (employee.name === taskInp.assignTo) {
        // Add the new task to the matched employee's task list
        employee.tasks.push(taskInp);
        employee.taskCount.newTask += 1; // Adjust count if needed
      }
      return employee;
    });

    // Save the updated data back to localStorage and AuthContext
    localStorage.setItem("employees", JSON.stringify(updatedData));
    setUserData({ ...userData, employeeData: updatedData });
  };

  const handleTask = () => {
    setPopup(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col semilg:flex-row items-center gap-3 semilg:justify-between  sm:bg-white/5 p-12"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-white/80">Task Title</h3>
            <input
              className="p-2 bg-white/20 rounded-md w-80 outline-none"
              type="text"
              name="taskTitle"
              placeholder="Make an E-commerce web"
              value={taskInp.taskTitle}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white/80">Date</h3>
            <input
              className="p-2 bg-white/20 rounded-md w-80 outline-none"
              type="date"
              name="taskDate"
              value={taskInp.taskDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white/80" htmlFor="options">
              Assign to
            </label>
            <div className="p-2 bg-black text-white/80 rounded-md w-80">
              <select
                className="pr-2 bg-black text-white/80 rounded-md w-full outline-none cursor-pointer"
                id="options"
                name="assignTo"
                value={taskInp.assignTo}
                onChange={handleChange}
              >
                <option>Select an Employee</option>
                {userData?.employeeData.map((item, index) => (
                  <option
                    className="text-white/80 bg-white/20 p-2"
                    key={index}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white/80">Category</h3>
            <input
              className="p-2 bg-white/20 rounded-md w-80 outline-none"
              type="text"
              name="taskCategory"
              placeholder="Design, Development etc.."
              value={taskInp.taskCategory}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-white/80">Description</h3>
            <textarea
              className="p-2 bg-white/20 rounded-md outline-none w-80 semilg:w-96"
              placeholder="About your Project..."
              name="taskDescription"
              rows="9"
              value={taskInp.taskDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full">
            <button
              className="w-80 semilg:w-96 py-3 bg-black rounded-lg"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
      {popup && (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-white/10">
          <div className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="pop-up w-96 flex items-center justify-center px-6 py-12 rounded-xl bg-black">
              <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-[20px] text-center font-bold">{`The task has been assigned to ${assignValue} successfully`}</h2>
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleTask}
                    className="px-5 py-1 bg-green-600 text-[20px] font-bold rounded-md text-center hover:bg-green-500"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTask;
