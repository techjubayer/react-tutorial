import React, { useState } from "react";
import Test from "./class-base-component/Test";
import EventHandler from "./functional-components/EventHandler";
import FormHandle from "./functional-components/FormHandle";
import HideShow from "./functional-components/HideShow";
import PassFunAsProps from "./functional-components/PassFunAsProps";
import PassGen from "./PassGen";
import TextUtils from "./TextUtils";

export default function Home(myProps) {
  return (
    <div className='container pb-5'>
      <PassGen mode={myProps.mode} myAlert={myProps.myAlert} />
      <PassFunAsProps mode={myProps.mode} myAlert={myProps.myAlert} toggleMode={myProps.toggleMode}/>
      <TextUtils mode={myProps.mode} />
      <Test mode={myProps.mode} />
      <EventHandler mode={myProps.mode}/>
      <HideShow mode={myProps.mode}/>
      <FormHandle mode={myProps.mode}/>
    </div>
  );
}
