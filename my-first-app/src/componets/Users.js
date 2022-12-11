import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Users(myProps) {
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>
        This is user page, we use here nested routing method
      </h2>

      <ol>
        <li>
          <Link
            to='/users/jubayer'
            state={{ param1: "Param1 Value", param2: 433 }}
          >
            Jubayer
          </Link>
        </li>
        <li>
          <Link
            to='/users/mahabub'
            state={{ param1: "Param1 Value", param2: 433 }}
          >
            Mahbubul
          </Link>
        </li>
        {/* To implement nested router we have to put Outler */}
        <Outlet />
      </ol>
    </div>
  );
}
