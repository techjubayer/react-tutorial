import React from "react";

export default function PassFunAsProps(myProps) {
  let checked = myProps.mode === "dark" ? "true" : "";

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Pass Function As Props</h2>
      <div className='d-flex justify-content-center'>
        <div
          className={`form-check form-switch text-${
            myProps.mode === "dark" ? "light" : "dark"
          }`}
        >
          <label className='custom-control-label' htmlFor='customSwitch1'>
            {`${
              myProps.mode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"
            }`}
          </label>
          <input
            type='checkbox'
            className='form-check-input'
            id='customSwitch1'
            onClick={myProps.toggleMode}
            checked={checked}
            onChange={myProps.toggleMode}
          />
        </div>
      </div>
    </div>
  );
}
