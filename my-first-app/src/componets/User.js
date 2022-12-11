import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function User(myProps) {
  const myRouterParam = useParams();
  const myUseLocation = useLocation();
  console.table(myUseLocation);
  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>This is {myRouterParam.name}'s page</h2>
      <p className='text-center'>
        This is the same page for all the user. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat quo molestiae accusantium optio
        assumenda, est, temporibus vitae nulla vero corrupti ad, eaque quibusdam
        blanditiis tempora illo ab quis consequuntur nam.
      </p>

      <div
        className={`shadow rounded bg-${myProps.mode} text-${
          myProps.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h5 className='text-center'>
          Uses of 'useParams()' react router dom Hook
        </h5>
        <h6 className='text-center'>Value: {myRouterParam.name}</h6>
      </div>
      <div
        className={`shadow rounded bg-${myProps.mode} text-${
          myProps.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h5 className='text-center'>
          Uses of 'useLocation()' react router dom Hook
        </h5>
        <p className='text-center'>
          hash: <b>{myUseLocation.hash}</b>
        </p>
        <p className='text-center'>
          key: <b>{myUseLocation.key}</b>
        </p>
        <p className='text-center'>
          pathname: <b>{myUseLocation.pathname}</b>
        </p>
        <p className='text-center'>
          search: <b>{myUseLocation.search}</b>
        </p>
        <p className='text-center'>
          state.param1: <b>{myUseLocation.state.param1}</b> (This value came
          from paraent component)
        </p>
        <p className='text-center'>
          state.param2: <b>{myUseLocation.state.param2}</b> (This value came
          from paraent component)
        </p>
      </div>
    </div>
  );
}
