import React from "react";
import UseEffect from "./hooks/UseEffect";

export default function Hooks(myProps) {
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Hooks in React Js</h2>
      <p className='text-center'>
        With Hook, we can use class component features in functional components
        such as sate, life cycle, pure component, etc
      </p>
      <p className='text-center'>
        <b>Example of Hooks:</b> useState, useCallback, useContext, ...., etc
      </p>
      <UseEffect mode={myProps.mode} />
    </div>
  );
}
