import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { UserProvider } from './hook/UserContext.jsx'
import {BrowserRouter} from "react-router-dom"


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </UserProvider>
  </BrowserRouter>
);
