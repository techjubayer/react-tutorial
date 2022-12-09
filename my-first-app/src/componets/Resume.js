import React from "react";

export default function Resume(myProps) {
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>This is my Resume Page</h2>
    </div>
  );
}
