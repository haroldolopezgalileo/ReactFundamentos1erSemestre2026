import React, { useCallback, useState } from "react";


const Button = React.memo(({ onClick }) => {
  console.log("Render Button");
  return <button onClick={onClick}>Click</button>
});

export default function Callback() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    const countTmp = count + 2;
    console.log("click: ", countTmp);
  }, [count]);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Button onClick={handleClick} />
    </>
  )
}