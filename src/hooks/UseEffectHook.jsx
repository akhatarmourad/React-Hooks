import { useState, useEffect } from "react";

export default function UseEffectHook() {

  const [value, setValue] = useState(0);
  const [sideEffectValue, setSideEffectValue] = useState(0);

  const generateRandomValue = () => {
    const generatedValue = Math.floor(Math.random() * 1000 + 99);
    setValue(generatedValue);
  }

  useEffect(() => {
    setSideEffectValue(value);
  }, [value]);

  return (
    <div className="bg-violet-300 p-5 rounded-xl flex items-center gap-5 my-5">
      <span>State Value : {value}</span>
      <button onClick={generateRandomValue} className="bg-indigo-600 text-white px-2 py-1 rounded-lg">Generate Random Value</button>
      <span>Side Effect Value : {sideEffectValue}</span>
    </div>
  )
}
