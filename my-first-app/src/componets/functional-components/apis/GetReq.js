import React, { useEffect, useState } from "react";

export default function GetReq(myProps) {
  const [getData, setGetData] = useState();
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then((response) => {
      response.json().then((data) => {
        setGetData(data);
      });
    });
  }, []);

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Get Request in React</h2>

      <table
        className={`table rounded bg-${myProps.mode} text-${
          myProps.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avater</th>
          </tr>
          {(getData != null) ? getData.data.map((item, keyOf) => (
            <tr>
              <td>{keyOf}</td>
              <td>{item.first_name + " " + item.last_name}</td>
              <td>{item.email}</td>
              <td><a href={item.avatar}>{item.avatar}</a></td>
            </tr>
          )) : ""}
        </thead>
      </table>
    </div>
  );
}
