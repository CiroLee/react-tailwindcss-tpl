import { useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="space-y-2 p-4">
      <h1 className="text-2xl font-bold">Parent</h1>
      <p>count: {count}</p>
      <button
        className="mt-2 h-10 cursor-pointer rounded-md border border-gray-500 px-4 active:bg-gray-200"
        onClick={add}>
        Add
      </button>
      <Child />
    </div>
  );
}

function Child() {
  console.log('child render');
  return <div className="w-fit border border-gray-100 p-2">this is child component, please see console</div>;
}
