import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import UserDetails from "../pages/UserDetails/UserDetails";
import AddUser from "../pages/AddUser/AddUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
]);
