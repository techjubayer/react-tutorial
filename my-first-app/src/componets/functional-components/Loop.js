import React, { useState } from "react";

export default function Loop(myProps) {
  const [user, setUser] = useState([
    { name: "Jubayer", email: "test@gmail.com", age: 25 },
    { name: "Mahbub", email: "test2@gmail.com", age: 22 },
    { name: "Ramesh", email: "test3@gmail.com", age: 23 },
    { name: "Shomim", email: "test4@gmail.com", age: 24 },
  ]);

  return (
    <div
      className={`shadow rounded bg-${myProps.mode} text-${
        myProps.mode === "dark" ? "light" : "dark"
      } border p-4 mt-5`}
    >
      <h2 className='text-center'>Loop in React</h2>

      <table
        className={`table rounded bg-${myProps.mode} text-${
          myProps.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          {user.map((item, key) => (
            <tr>
              <td>{key}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
