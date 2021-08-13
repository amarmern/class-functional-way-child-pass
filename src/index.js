import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PassGenerator from "./PassGenerator";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <PassGenerator />
  </StrictMode>,
  rootElement
);
