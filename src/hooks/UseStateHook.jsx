import  { useState } from "react";

export default function UseStateHook() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gray-300 p-5 rounded-xl flex items-center gap-5">
        <span>Counter Value : <span>{counter}</span></span>
        <button onClick={() => setCounter(counter - 1)} className="py-1 px-2 outline-none bg-sky-500 text-white rounded-lg">Increment Counter</button>
        <button onClick={() => setCounter(counter + 1)} className="py-1 px-2 outline-none bg-indigo-500 text-white rounded-lg">Decrement Counter</button>
    </div>
  )
}
