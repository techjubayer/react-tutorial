import React, { useMemo, useState } from "react";

export default function UsesOfUseMemo(myProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const useOfMemo = useMemo(
    //This method automatically call when ever any state or props update
    function anyName() {
      console.log("useMemo Called");
      return count1;
    },
    [count1]
    //This function only called when value will change
  );

  function updateValue1() {
    setCount1(count1 + 1);
  }
  function updateValue2() {
    setCount2(count2 + 1);
  }
  function updateValue3() {
    setCount1(count2);
  }

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      {console.log("rendering...")}
      <h2 className='text-center'>useMemo() Hook use</h2>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <p>useMemo for Count1: {useOfMemo}</p>
      <button onClick={updateValue1}>Update Count-1</button>
      <button onClick={updateValue2}>Update Count-2</button>
      <button onClick={updateValue3}>Set Count-1 from Count-2</button>

      <p><b>See on the console to see working flow</b></p>
    </div>
  );
}
