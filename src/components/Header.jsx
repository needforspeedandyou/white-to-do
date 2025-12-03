import { useState } from "react";
import arrow_down from "./../assets/arrow_down.svg";
import { useTodoStore } from "../stores/todoStore";

export default function Header() {
  const style = useTodoStore((s) => s.style);
  const setStyle = useTodoStore((s) => s.setStyle);
  const [input, setInput] = useState("");

  const [open, setOpen] = useState(false);
  return (
    <div className="w-[720px] mx-auto mt-7.5 flex justify-between relative">
      <h1 className="text-xl font-bold">White To-Do</h1>
      <button onClick={() => setOpen((prev) => !prev)} className="cursor-pointer flex items-center">
        Style <img src={arrow_down} alt=">" />
      </button>
      {open && (
        <div style={{ backgroundColor: style }} className="absolute right-0 top-8 border rounded-xl px-4 py-2">
          <p>Style</p>
          <input className="border-b px-2" onChange={(e) => setInput(e.target.value)} value={input} />
          <button className="border-b px-2 ml-2 cursor-pointer" onClick={() => setStyle(input)}>
            set style
          </button>
          <p className="text-center my-5">Or chose:</p>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setStyle("#66ff6e")} className="cursor-pointer border border-white rounded-xl p-5 bg-[#66ff6e]"></button>
            <button onClick={() => setStyle("#6f9fde")} className="cursor-pointer border border-white rounded-xl p-5 bg-[#6f9fde]"></button>
            <button onClick={() => setStyle("#b76fde")} className="cursor-pointer border border-white rounded-xl p-5 bg-[#b76fde]"></button>
            <button onClick={() => setStyle("#ff9a42")} className="cursor-pointer border border-white rounded-xl p-5 bg-[#ff9a42]"></button>
          </div>
        </div>
      )}
    </div>
  );
}
