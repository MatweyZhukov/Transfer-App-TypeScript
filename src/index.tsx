//Global
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//Styles
import "./index.css";

//Components
import App from "./components/app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
