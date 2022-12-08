import React, { useRef, useState } from "react";

export default function CtrledUnCtrledComponenets(myprops) {
  const [name, setName] = useState(""); //Control Component
  const [showName, setShowName] = useState(false); //Control Component

  let unCtrlValue1 = useRef(null); //UnControl Component
  const [showName2, setShowName2] = useState(false); //UnControl Component

  function handleSubmit(e) {
    //Control Component
    e.preventDefault();
    setShowName(true);
  }
  function handleUnCtrlComp(e) {
    //UnControl Component
    e.preventDefault();
    setShowName2(true);
    let unCtrlValue2 = document.getElementById("myInput2").value;
    alert(unCtrlValue1.current.value + " : " + unCtrlValue2);
  }
  return (
    <div
      className={`shadow rounded bg-${myprops.mode} text-${
        myprops.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>
        Controled and UnControled Componenets in React
      </h2>

      <div className='shadow rounder p-4 my-3 border'>
        <h4 className='text-center'>Controled Componenets in React</h4>
        <p>
          In React, Controlled Components are those in which form’s data is
          handled by the component’s state. It takes its current value through
          props and makes changes through callbacks like onClick,onChange, etc.
          A parent component manages its own state and passes the new values as
          props to the controlled component.
        </p>
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

      <div className='shadow rounder p-4 my-3 border'>
        <h4 className='text-center'>UnControled Componenets in React</h4>
        <p>
          Uncontrolled Components are the components that are not controlled by
          the React state and are handled by the DOM (Document Object Model). So
          in order to access any value that has been entered we take the help of
          refs.
        </p>
        <p>
          For instance, if we want to add a file as an input, this cannot be
          controlled as this depends on the browser so this is an example of an
          uncontrolled input.
        </p>
        <div className='App'>
          <form>
            <label>Name:</label>
            <input type='text' ref={unCtrlValue1} />
            <input id='myInput2' type='text' />
            <button onClick={handleUnCtrlComp} type='submit'>
              Submit
            </button>
          </form>
          {showName2 === true && (
            <p>
              You have submitted. Name: <b> {unCtrlValue1.current.value} </b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
