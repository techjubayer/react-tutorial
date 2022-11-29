import React, { useState } from "react";
import Alert from "./Alert";
import PassGen from "./PassGen";
import TextUtils from "./TextUtils";

export default function Home(myProps) {
  return (
    <div className='container pb-5'>
      <PassGen mode={myProps.mode} myAlert={myProps.myAlert} />
      <TextUtils mode={myProps.mode} />
    </div>
  );
}
