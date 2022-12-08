import RefFunc from "./class-base-component/RefFunc";
import RenderLifeCycle from "./class-base-component/RenderLifeCycle";
import Test from "./class-base-component/Test";
import UsesOfPureComp from "./class-base-component/UsesOfPureComp";
import CtrledUnCtrledComponenets from "./functional-components/CtrledUnCtrledComponenets";
import EventHandler from "./functional-components/EventHandler";
import FormHandle from "./functional-components/FormHandle";
import HideShow from "./functional-components/HideShow";
import HighOrderComponents from "./functional-components/HighOrderComponents";
import Hooks from "./functional-components/Hooks";
import Loop from "./functional-components/Loop";
import PassFunAsProps from "./functional-components/PassFunAsProps";
import PassGen from "./PassGen";
import TextUtils from "./TextUtils";

export default function Home(myProps) {
  return (
    <div className='container pb-5'>
      <PassFunAsProps
        mode={myProps.mode}
        myAlert={myProps.myAlert}
        toggleMode={myProps.toggleMode}
      />
      <PassGen mode={myProps.mode} myAlert={myProps.myAlert} />
      <Loop mode={myProps.mode} />
      <CtrledUnCtrledComponenets mode={myProps.mode} />
      <HighOrderComponents mode={myProps.mode} />
      <UsesOfPureComp mode={myProps.mode} />
      <Hooks mode={myProps.mode} />
      <RenderLifeCycle mode={myProps.mode} />
      <TextUtils mode={myProps.mode} />
      <Test mode={myProps.mode} />
      <EventHandler mode={myProps.mode} />
      <HideShow mode={myProps.mode} />
      <FormHandle mode={myProps.mode} />
      <RefFunc mode={myProps.mode} />
    </div>
  );
}
