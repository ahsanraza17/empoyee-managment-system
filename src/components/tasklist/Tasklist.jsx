import { React, useRef, useEffect, useState } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  const tasklistRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const colors = ["bg-red-600", "bg-green-600", "bg-yellow-500", "bg-blue-600"];

  // Check if the task list is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (tasklistRef.current) {
        setIsOverflowing(
          tasklistRef.current.scrollWidth > tasklistRef.current.clientWidth
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow); // Recheck on window resize
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Scroll by 300px left or right
  const scrollTaskList = (direction) => {
    if (tasklistRef.current) {
      tasklistRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {isOverflowing && (
        <button
          onClick={() => scrollTaskList("left")}
          className="absolute text-[20px] left-[-15px] top-1/2 transform -translate-y-1/2 text-white z-10"
        >
          &lt;
        </button>
      )}
      <div
        ref={tasklistRef}
        id="tasklist-container"
        className="w-full flex flex-col justify-center items-center gap-[14px]"
      >
        {data?.tasks.map((e, index) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          if(e.newTask){
            return <NewTask key={index} randomColor={randomColor} e={e} />
          }
          if(e.active){
            return <AcceptTask key={index} randomColor={randomColor} e={e} />
          }
          if(e.completed){
            return <CompleteTask key={index} randomColor={randomColor} e={e} />
          }
          if(e.failed){
            return <FailedTask key={index} randomColor={randomColor} e={e} />
          }
        })}
      </div>
      {isOverflowing && (
        <button
          onClick={() => scrollTaskList("right")}
          className="absolute text-[20px] right-[-15px] top-1/2 transform -translate-y-1/2 text-white z-10"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Tasklist;
