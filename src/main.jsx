import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Chat from "./routes/chat/index.jsx";
import RootLayout from "./layouts/rootLayout/index.jsx";
import DashboardLayout from "./layouts/dashboardLayout/index.jsx";
import SignUpPage from "./routes/signUp/index.jsx";
import SignInPage from "./routes/signIn/index.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
