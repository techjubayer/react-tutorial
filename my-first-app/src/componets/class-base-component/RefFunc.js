import React, { Component, createRef } from "react";
import UseRef from "../functional-components/hooks/UseRef";

export default class RefFunc extends Component {
  constructor() {
    super();
    this.myRef = createRef();
  }

  getInputValue() {
    const inputValue = this.myRef.current.value;
    alert(inputValue);
  }

  setInputValueFocus() {
    this.myRef.current.value = "Jubayer";
    this.myRef.current.focus();
    this.myRef.current.style.color = "red";
    this.myRef.current.style.backgroundColor = "black";
  }

  render() {
    return (
      <div
        className={`shadow rounded bg-${this.props.mode} text-${
          this.props.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h2 className='text-center'>Refs and the DOM</h2>
        <ol>
          <li>createRef() function manipulate any target element forcfully</li>
          <li>createRef() use only in class base component</li>
          <li>To use Refs in functional component we can use useRef() Hook</li>
        </ol>
        <h4>When to use Refs</h4>
        <ul>
          <li>Managing focus, text selection, or media playback.</li>
          <li>Triggering imperative animations.</li>
          <li>Integrating with third-party DOM libraries.</li>
        </ul>

        <div
          className={`shadow rounded bg-${this.props.mode} text-${
            this.props.mode === "dark" ? "light" : "dark"
          } border p-4 mt-5`}
        >
          <h2 className='text-center'>Class Base Example</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter anything'
              ref={this.myRef}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button
              className='btn btn-primary m-2'
              onClick={() => this.getInputValue()}
            >
              Get Value
            </button>
            <button
              className='btn btn-primary m-2'
              onClick={() => this.setInputValueFocus()}
            >
              Set and Focus
            </button>
          </div>
        </div>
        <UseRef mode={this.props.mode} />
      </div>
    );
  }
}
