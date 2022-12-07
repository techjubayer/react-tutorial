import React, { useState } from "react";

export default function FormHandle(myProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  function onSubmitHandler(e) {
    setIsFormSubmit(true);
    e.preventDefault();
  }

  function passWordChanged(e) {
    setPassword(e.target.value);
  }
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Form Data Handle</h2>
      <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter name'
            onChange={(e) => setEmail(e.target.value)} //Method 1---------------
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
            onChange={passWordChanged} //Method 2---------------
          />
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary m-auto d-block'>
          Submit
        </button>
      </form>

      {isFormSubmit ? (
        <div
          className={`shadow rounded bg-${myProps.mode} text-${
            myProps.mode === "dark" ? "light" : "dark"
          } border p-4 mt-5`}
        >
          <h4 className='text-center'>Form Data</h4>
          <div className='d-flex justify-content-between'>
            <h5>Name:</h5>
            <h5>{email}</h5>
          </div>
          <div className='d-flex justify-content-between'>
            <h5>Password:</h5>
            <h5>{password}</h5>
          </div>
          <div className='d-flex justify-content-between'>
            <h5>Is Checked:</h5>
            <h5>{isChecked ? "Checked" : "Not Checked"}</h5>
          </div>
        </div>
      ) : null}
    </div>
  );
}
