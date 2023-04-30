import React from "react";
import ReactDOM from "react-dom/client";


import Profile from "./component/Profile";
import Header from "./component/Header";
import About from "./component/About";
import Body from "./component/Body";
import Error from "./component/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element: <Profile />
          }
          
        ]
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={router} />);
