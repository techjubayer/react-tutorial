import React, { useRef } from "react";
import ForwardRef from "../ForwardRef";

export default function UseRef(myProps) {
  const myRef = useRef(null);

  function getInputValue() {
    const inputValue = myRef.current.value;
    alert(inputValue);
  }
  function setInputValueFocus() {
    myRef.current.value = "Jubayer";
    myRef.current.focus();
    myRef.current.style.color = "red";
    myRef.current.style.backgroundColor = "black";
  }

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Function Base Example</h2>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter anything'
          ref={myRef}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary m-2' onClick={getInputValue}>
          Get Value
        </button>
        <button className='btn btn-primary m-2' onClick={setInputValueFocus}>
          Set and Focus
        </button>
      </div>
      <ForwardRef mode={myProps.mode} />
    </div>
  );
}
