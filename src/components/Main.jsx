import { useState } from "react";
import { useTodoStore } from "../stores/todoStore";
import check from "./../assets/check.svg";
import close from "./../assets/close.svg";
import deleteIcon from "./../assets/delete.svg";
import pattern from "./../assets/pattern.png";

export const Mains = () => {
  const [inputValue, setInputValue] = useState("");
  const tasks = useTodoStore((s) => s.tasks);
  const addTask = useTodoStore((s) => s.addTask);
  const undoneTask = useTodoStore((s) => s.undoneTask);
  const completeTask = useTodoStore((s) => s.completeTask);
  const deleteTask = useTodoStore((s) => s.deleteTask);
  const style = useTodoStore((s) => s.style);

  return (
    <>
      <p className="mt-21.5 text-center">You can write here your dreams...</p>
      <div className="w-[720px] mx-auto flex justify-between mt-31">
        <input className="border rounded-[14px] px-5 py-2.5 w-[60%]" placeholder="Task title..." type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className="border rounded-[14px] py-2.5 w-[38%] cursor-pointer" onClick={() => addTask(inputValue)}>
          Create task
        </button>
      </div>
      <div style={{ background: `linear-gradient(180deg, ${style} 40%, ${style}00 100%), url(${pattern}), ${style}`, boxShadow: `0px -8px 0px 0px ${style}56` }}>
        <div className="w-[720px] min-h-[699px] mx-auto mt-10">
          <h2 className="text-center text-2xl tracking-widest font-bold pt-[75px] mb-[18px]">Tasks</h2>
          <div className="flex justify-between">
            <p className="ml-2.5 text-xl">To-do</p>
            <div className="flex gap-[60px] mr-[30px]">
              <img src={check} alt="X" />
              <img src={close} alt="v" />
            </div>
          </div>
          <hr className="mt-1.5 border-b" />
          <div className="mt-[7px] flex flex-col gap-[7px]">
            {tasks.map((task) => (
              <div key={task.id} className="flex justify-between">
                <p className="w-[70%] border-b h-[33px] flex items-end px-2.5">{task.taskName}</p>
                <div className="flex justify-between w-[28%]">
                  <button onClick={() => deleteTask(task.id)} className="cursor-pointer">
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                  <button onClick={() => completeTask(task.id)} className="cursor-pointer w-[75px] h-[33px] border rounded-[11px] flex justify-center items-center">
                    {task.completed && <img className="h-[25px]" src={check} alt="asdds" />}
                  </button>
                  <button onClick={() => undoneTask(task.id)} className="cursor-pointer w-[75px] h-[33px] border rounded-[11px]  flex justify-center items-center">
                    {task.undone && <img className="h-[25px]" src={close} alt="asdds" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
