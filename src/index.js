import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
import App from "./App";
import Router from "./Router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const ways = [
  {
    path: "/",
    element: <Router />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
];
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <Router />
  </StrictMode>
);
