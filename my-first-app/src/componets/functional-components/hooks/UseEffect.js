import React, { useEffect, useState } from "react";

export default function UseEffect(myProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  //useEffect() function use---------------------------


  useEffect(() => {
    //This function automatically changed whenevet the state and props changed and aslo afer render first time
    console.warn("UseEffect Called");
  });
  useEffect(() => {
    console.warn("UseEffect Called only when count1 and count3 state change");
  }, [count1, count3]);
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>useEffect() hook use</h2>

      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <p>Count3: {count3}</p>
      <button
        className='btn btn-primary d-block m-auto my-1'
        onClick={() => setCount1(count1 + 1)}
      >
        Update Count-1
      </button>
      <button
        className='btn btn-primary d-block m-auto my-1'
        onClick={() => setCount2(count2 + 1)}
      >
        Update Count-2
      </button>
      <button
        className='btn btn-primary d-block m-auto my-1'
        onClick={() => setCount3(count3 + 1)}
      >
        Update Count-3
      </button>
    </div>
  );
}
