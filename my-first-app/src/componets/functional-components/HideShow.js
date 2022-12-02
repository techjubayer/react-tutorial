import React, { useState } from "react";

export default function HideShow(myProps) {
  const [isHide, setIsHide] = useState(true);

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Hide Show Function</h2>
      {isHide ? (
        <h1 className='text-center text-decoration-line-through'>
          Jubayer Ali
        </h1>
      ) : null}

      <div className='d-flex justify-content-center'>
        <button
          type='button'
          className='btn btn-primary m-1'
          onClick={() => setIsHide(false)}
        >
          Hide
        </button>
        <button
          type='button'
          className='btn btn-primary m-1'
          onClick={() => setIsHide(true)}
        >
          Show
        </button>
        <button
          type='button'
          className='btn btn-primary m-1'
          onClick={() => setIsHide(!isHide)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
