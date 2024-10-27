import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { TrekProvider } from "./Context/SelectedServiceContext.jsx";

const router = createBrowserRouter([
  { path: "*", Component: App, errorElement: <p>Error</p> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrekProvider>
      <RouterProvider router={router} />
    </TrekProvider>
  </StrictMode>
);
