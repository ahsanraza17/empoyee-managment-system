import React from "react";

const CompleteTask = ({ randomColor , e }) => {
  return (
    <div
      className={`w-full flex flex-col h-fit py-8 gap-5 justify-center px-5 rounded-2xl ${randomColor}`}
    >
      <div className="flex justify-between items-center">
        <button className="px-2 bg-red-700 text-white text-[20px] font-bold rounded-md">
          {e.taskCategory}
        </button>
        <div>{e.taskDate}</div>
      </div>
      <div>
        <h1 className="text-[25px] font-bold">{e.taskTitle}</h1>
        <p>{e.taskDescription}</p>
      </div>
      <div className="w-full">
        <button className="p-2 bg-green-700 text-white text-[20px] font-bold rounded-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
