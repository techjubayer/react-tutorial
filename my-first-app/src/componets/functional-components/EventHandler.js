import React, { useState } from "react";

export default function EventHandler(myProps) {
  const [formData, setFormData] = useState(null);
  const [printData, setPrintData] = useState(null);

  function onTextChangeListener(targetElement) {
    setFormData(targetElement.target.value);
  }

  function clearData() {
    setFormData(null);
    setPrintData(null);
  }

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Input Data Handle</h2>
      <div className='d-flex'>
        <p className='mx-4'>On Change: </p>
        <p> {formData}</p>
      </div>
      <div className='d-flex'>
        <p className='mx-4'>On Click: </p>
        <p> {printData}</p>
      </div>
      <input
        className='form-control m-1'
        type='text'
        placeholder='Default input'
        onChange={onTextChangeListener}
        value={printData}
      ></input>
      <div className='d-flex'>
        <button
          type='button'
          className='btn btn-primary m-1'
          onClick={() => setPrintData(formData)}
        >
          Get Data
        </button>
        <button
          type='button'
          className='btn btn-primary m-1'
          onClick={clearData}
        >
          Clear Data
        </button>
      </div>
    </div>
  );
}
