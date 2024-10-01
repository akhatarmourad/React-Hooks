import { useState, useMemo } from 'react';

export default function UseMemoHook() {
  
    const arrayItems = new Array(29_999).fill(0).map((_, i) => {
        return {id: i, isSelected: i === 29_999}
    });

    const [count, setCount] = useState(0);
    const [items] = useState(arrayItems);

    const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  return (
    <div className="bg-lime-300 p-5 rounded-xl flex items-center gap-5 my-5">
        <span>Count Value : {count}</span>
        <button onClick={() => setCount(count + 1)} className="bg-lime-600 text-white px-2 py-1 rounded-lg">Change Count</button>
        <span>Selected Item : {selectedItem}</span>
    </div>
  )
}
