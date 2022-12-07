import React, { Component, PureComponent } from "react";
import UsesOfUseMemo from "../functional-components/hooks/UsesOfUseMemo";

export default class UsesOfPureComp extends PureComponent {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        className={`shadow rounded bg-${this.props.mode} text-${
          this.props.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h2 className='text-center'>Use of PureComponent in React</h2>
        <p>
          1. PureComponent is similar to Component but it skips re-renders for
          same props and state
        </p>
        <p>2. PureComponent use only class component</p>
        <p>
          3. PureComponent use to prevent re-rendering, when the props or state
          change but the values is same as previous
        </p>
        <p>
          4. To use PureComponent in functional component we can use Hook name
          useMemo()
        </p>

        <UsesOfUseMemo mode={this.props.mode} />
      </div>
    );
  }
}
