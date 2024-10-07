import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import AmenitiesPage from "./routes/amenitiesPage/AmenitiesPage";
import ContactUs from "./routes/contactUs/ContactUs";

import Room from "./routes/room/Room";
import MeetBangladesh from "./routes/meetBangadesh/MeetBangladesh";
import PlacesToVisit from "./routes/placesToVisit/PlacesToVisit";
import Package from "./routes/package/Package";
import BookTour from "./routes/bookTour/BookTour";

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
          path: "/meet-bangladesh",
          element: <MeetBangladesh />,
        },
        {
          path: "/places-to-visit",
          element: <PlacesToVisit />,
        },
        {
          path: "/package",
          element: <Package />,
        },
        {
          path: "/book-tour",
          element: <BookTour />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
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
    // {
    //   path: "contact-us"
    //   element
    // }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
