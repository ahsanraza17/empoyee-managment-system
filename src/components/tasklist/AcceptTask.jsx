import React from "react";

const AcceptTask = ({ randomColor , e }) => {
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
      <div className="flex gap-2 items-center">
        <button className="p-2 text-[15px] bg-green-700 text-white font-bold rounded-md">
          Mark as completed
        </button>
        <button className="p-2 text-[15px] bg-red-700 text-white font-bold rounded-md">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
