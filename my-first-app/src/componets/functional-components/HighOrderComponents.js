import React, { useState } from "react";

export default function HighOrderComponents(myprops) {
  return (
    <div
      className={`shadow rounded bg-${myprops.mode} text-${
        myprops.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>High Order Components in React JS</h2>
      {/* <RederableComp mode={myprops.mode} /> */}
      <div className='d-flex'>
        <HOC_Red myComponent={RederableComp} />
        <HOC_Green myComponent={RederableComp} />
        <HOC_Blue myComponent={RederableComp} />
      </div>
    </div>
  );
}

function HOC_Red(myprops) {
  return (
    <div
      className='p-3 mx-2 border shadow rounded'
      style={{ backgroundColor: "red", width: "200" }}
    >
      <h5>Dynamic Component</h5>
      <myprops.myComponent />
    </div>
  );
}
function HOC_Green(myprops) {
  return (
    <div
      className='p-3 mx-2 border shadow rounded'
      style={{ backgroundColor: "green", width: "200" }}
    >
      <h5>Dynamic Component</h5>
      <myprops.myComponent />
    </div>
  );
}
function HOC_Blue(myprops) {
  return (
    <div
      className='p-3 mx-2 border shadow rounded'
      style={{ backgroundColor: "blue", width: "200" }}
    >
      <h5>Dynamic Component</h5>
      <myprops.myComponent />
    </div>
  );
}

function RederableComp(myprops) {
  const [name, setName] = useState(""); //Control Component
  const [showName, setShowName] = useState(false); //Control Component

  function handleSubmit(e) {
    //Control Component
    e.preventDefault();
    setShowName(true);
  }
  return (
    <div
      className={`shadow rounded bg-${myprops.mode} text-${
        myprops.mode === "dark" ? "light" : "dark"
      } border p-4`}
    >
      <h4 className='text-center'>This is an Rederable Componenet</h4>
      <div className='App'>
        <form>
          <label>Name:</label>
          <input
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Submit
          </button>
        </form>
        {showName === true && (
          <p>
            You have submitted. Name: <b> {name} </b>
          </p>
        )}
      </div>
    </div>
  );
}
