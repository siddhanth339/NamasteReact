import React, { Suspense, lazy, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = useState("user");
  return (
    <Provider store={appStore}>
      <div className="app">
        {/*the UserContext.Provider is used to update the values in React context,
    for this, we need to wrap the component with UserContext.Provider and in the below example, 
    the header component will have the value Siddhanth and in the other components
    where we use React context, the value will be "Default User" (which is the default value set in the UserContext component) */}
        <UserContext.Provider value={{ loggedInUser: user, setUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
