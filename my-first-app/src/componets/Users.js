import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import User from "./User";

export default function Users(myProps) {
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>This is user page</h2>
      <ol>
        <li>
          <Link to='/users/jubayer'>Jubayer</Link>
        </li>
        <li>
          <Link to='/users/mahabub'>Mahbubul</Link>
        </li>
      </ol>
    </div>
  );
}
