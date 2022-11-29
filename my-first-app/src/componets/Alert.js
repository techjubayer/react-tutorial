import React, { useState } from "react";

export default function Alert(myProps) {
  const capitizeFirstLater = (myString) => {
    const lowerCase = myString.toLowerCase();
    const element = document.getElementById("myDIV");
    // element.classList.remove("my-alert");
    console.log(element);
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };

  return (
    myProps.myAlert && (
      <div
        id='myDIV'
        className={`my-alert alert alert-${myProps.myAlert.type} fade show`}
        role='alert'
      >
        <strong>{capitizeFirstLater(myProps.myAlert.type)}! </strong>
        {myProps.myAlert.message}
      </div>
    )
  );
}