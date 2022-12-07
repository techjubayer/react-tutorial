import React, { Component } from "react";
import ComponetDid from "../functional-components/ComponetDid";

export default class RenderLifeCycle extends Component {
  constructor() {
    super();
    console.log("Render Life Cycle: constactor method call");
  }

  render() {
    console.log("Render Life Cycle: render method called");
    return (
      <div
        className={`shadow rounded bg-${this.props.mode} text-${
          this.props.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h2 className='text-center'>Render Life Cycle</h2>
        <p>Render method only create on class componet</p>
        <p>
          <b>Render run 3 times:</b>
          <br />
          1. When the componets are ready <br />
          2. When state update <br />
          3. When props update <br />
          See on the console...
        </p>
        <ComponetDid mode={this.props.mode} />
      </div>
    );
  }
}
