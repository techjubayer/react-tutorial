import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParams(myProps) {
  const [urlParams, setUrlParams] = useSearchParams();
  const [age, setAge] = useState();
  const [name, setName] = useState();

  

  function setUrlParamsInUrl() {
    setUrlParams({ age: age, name: name });
  }
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>searchParams() Hook use</h2>
      <ol>
        <li>searchParams() is a React Router's hook</li>
        <li>Use of this hook: we can get and set url parameters</li>
      </ol>
      <input
        type='number'
        placeholder='Enter age'
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter name'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={setUrlParamsInUrl}>Set Url</button>

      <div
        className={`shadow rounded bg-${myProps.mode} text-${
          myProps.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h4>Age: {urlParams.get("age")}</h4>
        <h4>Name: {urlParams.get("name")}</h4>
      </div>
    </div>
  );
}
