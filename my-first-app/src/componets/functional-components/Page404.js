import React from "react";
import { Link } from "react-router-dom";

export default function Page404(myProps) {
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>404</h2>
      <p className='text-center'>Page Not Found</p>
      <p className='text-center'>
        <Link to='/'>Go to home</Link>
      </p>
    </div>
  );
}
