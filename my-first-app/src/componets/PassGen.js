import React, { useState } from "react";

export default function PassGen(myProps) {
  const [passLength, setPassLenth] = useState(20);
  const [generatedPass, setGeneratedPass] = useState("");
  const [isLowerCaseON, setIsLowerCaseON] = useState(true);
  const [isUpperCaseON, setIsUpperCaseON] = useState(true);
  const [isNumberON, setIsNumberON] = useState(true);
  const [isSpecialCharON, setIsSpecialCharON] = useState(false);

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "`!@#$%^&*()_+=-]}[{';:/?.>,<|~" + '"';
  const numbers = "0123456789";

  const onLowerCaseRadioChange = (e) => {
    let isLowerCaseON1 = !isLowerCaseON;
    console.log(isLowerCaseON1);
    setIsLowerCaseON(isLowerCaseON1);
  };
  const onUpperCaseRadioChange = (e) => {
    let isUpperCaseON1 = !isUpperCaseON;
    console.log(isUpperCaseON1);
    setIsUpperCaseON(isUpperCaseON1);
  };
  const onSpecialCharRadioChange = (e) => {
    let isSpecialCharON1 = !isSpecialCharON;
    console.log(isSpecialCharON1);
    setIsSpecialCharON(isSpecialCharON1);
  };
  const onNumberRadioChange = (e) => {
    let isNumberON1 = !isNumberON;
    console.log(isNumberON1);
    setIsNumberON(isNumberON1);
  };

  const onPassLengthChange = (e) => {
    let passLength = e.target.value;
    setPassLenth(passLength);
  };

  const generatePassword = () => {
    let chars = "";
    let password = "";

    if (isLowerCaseON) {
      chars = chars + lowerCase;
    }
    if (isUpperCaseON) {
      chars = chars + upperCase;
    }
    if (isNumberON) {
      chars = chars + numbers;
    }
    if (isSpecialCharON) {
      chars = chars + symbols;
    }

    for (let i = 0; i < passLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    setGeneratedPass(password);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(generatedPass);
    myProps.myAlert("success", "Copied password");
  };

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Generate Random Password</h2>
      <div className='row m-auto'>
        <div className='d-flex flex-column justify-content-center shadow rounded border p-4 col m-1'>
          <div className='form-check my-1'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioLower'
              id='flexRadioLower'
              checked={isLowerCaseON}
              onClick={onLowerCaseRadioChange}
              onChange={onLowerCaseRadioChange}
            />
            <label className='form-check-label'>lower case latter (a-z)</label>
          </div>
          <div className='form-check my-1'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioUpper'
              id='flexRadioUpper'
              checked={isUpperCaseON}
              onClick={onUpperCaseRadioChange}
              onChange={onUpperCaseRadioChange}
            />
            <label className='form-check-label'>UPPER CASE LATTER (A-Z)</label>
          </div>
          <div className='form-check my-1'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioNumber'
              id='flexRadioNumber'
              checked={isNumberON}
              onClick={onNumberRadioChange}
              onChange={onNumberRadioChange}
            />
            <label className='form-check-label'>Numbers incluided (0-9)</label>
          </div>
          <div className='form-check my-1'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioSpecial'
              id='flexRadioSpecial'
              checked={isSpecialCharON}
              onClick={onSpecialCharRadioChange}
              onChange={onSpecialCharRadioChange}
            />
            <label className='form-check-label'>
              Special Characters (!@#$%^&*)
            </label>
          </div>
          <div className='p-3'>
            <label className='form-label'>Password Length:</label>
            <div className='row m-auto'>
              <input
                onChange={onPassLengthChange}
                type='range'
                className='form-range mx-1 col-md'
                min='0'
                max='100'
                step='1'
                id='rangeInput'
                value={passLength}
              />
              <input
                type='number'
                className='border border-success rounded mx-1 text-center col-md'
                onChange={onPassLengthChange}
                value={passLength}
              />
            </div>
          </div>
          <button
            className='btn btn-success m-auto w-100'
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
        <div className='shadow rounded border p-4 col m-1'>
          <h4 className='text-center'>Generated Password</h4>
          <div className='d-flex flex-column justify-content-center'>
            <textarea
              className='text-center m-2'
              value={generatedPass}
              disabled
            />

            <button
              type='button'
              className='btn btn-outline-success m-auto m-2'
              onClick={copyToClipBoard}
            >
              Copy
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-clipboard'
                viewBox='0 0 16 16'
              >
                <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
                <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
