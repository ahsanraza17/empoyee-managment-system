import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap gap-2">
      <div className="w-full xsm:w-[49%] md:w-[24%] flex flex-col p-5 gap-1 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-400">
        <h1 className="text-[50px] font-extrabold leading-10">{data?.taskCount.newTask}</h1>
        <p className="text-[20px] font-bold">New Task</p>
      </div>
      <div className="w-full xsm:w-[49%] md:w-[24%] flex flex-col p-5 gap-1 bg-green-500 rounded-lg cursor-pointer hover:bg-green-400">
        <h1 className="text-[50px] font-extrabold leading-10">{data?.taskCount.completed}</h1>
        <p className="text-[20px] font-bold">Completed</p>
      </div>
      <div className="w-full xsm:w-[49%] md:w-[24%] flex flex-col p-5 gap-1 bg-yellow-500 rounded-lg cursor-pointer hover:bg-yellow-400">
        <h1 className="text-[50px] font-extrabold leading-10">{data?.taskCount.active}</h1>
        <p className="text-[20px] font-bold">Accepted</p>
      </div>
      <div className="w-full xsm:w-[49%] md:w-[24%] flex flex-col p-5 gap-1 bg-red-500 rounded-lg cursor-pointer hover:bg-red-400">
        <h1 className="text-[50px] font-extrabold leading-10">{data?.taskCount.failed}</h1>
        <p className="text-[20px] font-bold">Failed</p>
      </div>
    </div>
  );
};

export default TaskListNumber;
