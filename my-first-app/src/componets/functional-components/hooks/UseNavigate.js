import React from "react";
import { useNavigate } from "react-router-dom";

export default function UseNavigate(myProps) {
  const navigatore = useNavigate();

  const goTo = (urlParam) => {
    navigatore(urlParam);
  };
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'> useNavigate() hook use</h2>
      <ol>
        <li>useNavigate() is a react router dom hook</li>
        <li>use this method we can navigate pages on button click</li>
      </ol>

      <button onClick={() => navigatore("/resume")}>Go to Resume</button>
      <button onClick={() => goTo("/users")}>Go to Users</button>
    </div>
  );
}
