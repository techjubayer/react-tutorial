import React, { useState } from "react";

export default function TextUtils(myProps) {
  const [myText, setText] = useState("This is default text");
  const clearText = () => {
    setText("");
  };
  const textAreaOnChangedListener = (event) => {
    setText(event.target.value);
  };
  const removeExtraSpaces = (event) => {
    let newText = myText.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>userState() use in React App</h2>
      <div className='d-flex justify-content-between'>
        <div className='shadow rounded border p-4 w-100 mx-1'>
          <div className='mb-3'>
            <textarea
              onChange={textAreaOnChangedListener}
              type='email'
              className='form-control m-2'
              id='myText'
              placeholder='Enter any text here'
              rows='3'
              value={myText}
            />
            <div className='row p-2'>
              <button className='btn btn-success col mx-1' onClick={clearText}>
                Clear Text
              </button>
              <button
                className='btn btn-success col mx-1'
                onClick={removeExtraSpaces}
              >
                Remove Extrac Spaces
              </button>
            </div>
          </div>
        </div>
        <div className='shadow rounded border p-4 w-100 mx-1'>
          <div className='row'>
            <h6 className='col'>Preview:</h6>
            <p className='col'>{myText}</p>
          </div>
          <div className='row'>
            <h6 className='col'>Text Summery:</h6>
            <p className='col'>
              {myText.split(" ").length} words and {myText.length} characters
            </p>
          </div>
          <div className='row'>
            <h6 className='col'>To Upper Case:</h6>
            <p className='col'>{myText.toUpperCase()}</p>
          </div>
          <div className='row'>
            <h6 className='col'>To Lower Case:</h6>
            <p className='col'>{myText.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
