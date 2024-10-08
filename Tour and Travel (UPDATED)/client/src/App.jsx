import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, SimpleLayout } from "./routes/layout/Layout";
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
import {
  packagePageLoader,
  homePageLoader,
  allPackagesPageLoader,
} from "./lib/loaders"; // Ensure loaders are correctly imported
import Allpackages from "./routes/Allpackages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main layout for primary routes
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: homePageLoader,
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
          path: "/book-tour",
          element: <BookTour />,
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
    {
      path: "/", // This could be adjusted if needed
      element: <SimpleLayout />, // Alternative layout for package-related routes
      children: [
        {
          path: "all-packages/packages/:id", // Note: Remove the leading slash for nested routes
          element: <Package />,
          loader: packagePageLoader,
        },
        {
          path: "all-packages", // Same here
          element: <Allpackages />,
          loader: allPackagesPageLoader,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
