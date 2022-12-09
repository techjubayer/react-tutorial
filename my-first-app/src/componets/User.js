import React from "react";
import { useParams } from "react-router-dom";

export default function User(myProps) {
  const myRouterParam = useParams();
  console.log();
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>This is {myRouterParam.name}'s page</h2>
    </div>
  );
}
