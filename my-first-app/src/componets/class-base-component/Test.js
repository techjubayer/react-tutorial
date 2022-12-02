import React, { Component } from "react";

export default class Test extends Component {
  render() {
    return (
      <div
        className={`shadow rounded bg-${this.props.mode} text-${
          this.props.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        This is Class Component
      </div>
    );
  }
}
