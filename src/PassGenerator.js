import { useState } from "react";

const PassGenerator = () => {
  const [state, setState] = useState("jhgg");
  const callbackParent = (pass) => {
    setState(pass);
  };
  return (
    <>
      <ChildComponent callbackParent={callbackParent} /> Parrent{" "}
      <p> {state} </p>
    </>
  );
};

export default PassGenerator;

const ChildComponent = (props) => {
  const passwordGenrator = () => {
    props.callbackParent(Math.random().toString(32));
  };
  return (
    <>
      {" "}
      <button onClick={passwordGenrator}>Generator </button>
    </>
  );
};
