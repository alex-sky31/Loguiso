import "./App.css";
import HomePage from "./pages/home/homePage";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Loguiso",
      element: <HomePage />,
    },
    {
      path: "/NO",
      element: <div>Page not found</div>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
