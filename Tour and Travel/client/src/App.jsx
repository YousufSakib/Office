import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import AmenitiesPage from "./routes/amenitiesPage/AmenitiesPage";
import ContactUs from "./routes/contactUs/ContactUs";

import Room from "./routes/room/Room";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/amenities",
          element: <AmenitiesPage />,
        },
        {
          path: "about",
          element: <ContactUs />,
        },
        {
          path: "room",
          element: <Room />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
