import { useState } from "react"
import arrow_down from "./../assets/arrow_down.svg"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-[720px] mx-auto mt-7.5 flex justify-between relative">
      <h1 className="text-xl font-bold">White To-Do</h1>
      <button onClick={() => setOpen(prev => !prev)} className="cursor-pointer flex items-center">Style <img src={arrow_down} alt=">" /></button>
      {open && <div className="absolute right-0 top-5">
        <p>Style</p>
      </div>}
    </div>
  )
}
