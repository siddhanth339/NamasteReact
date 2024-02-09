import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Restaurant from "./components/Restaurant";
import { Error } from "./components/Error";
import { ContactUs } from "./components/ContactUs";
import Login from "./components/Login";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
