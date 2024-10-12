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
import AdminLayout from "./routes/adminLayout/AdminLayout";
import AdminPackageAdd from "./routes/adminPackageAdd/AdminPackageAdd";
import AdminHome from "./routes/adminHome/AdminHome";
import AdminAllPackage from "./routes/adminAllPackage/AdminAllPackage";
import FullScreenloading from "./components/fullScreenloading/FullScreenloading";
import AdminUpdatePackage from "./routes/adminUpdatePackage/AdminUpdatePackage";
import BasicSetUp from "./routes/basicSetUp/BasicSetUp";
import BasicImgSetup from "./routes/basicImgSetup/basicImgSetup";
import AboutUs from "./routes/aboutUs/AboutUs";
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
          path: "packages", // running
          element: <Allpackages />,
          loader: allPackagesPageLoader,
        },
        {
          path: "packages/:id", //running
          element: <Package />,
          loader: packagePageLoader,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "about-us",
          element: <AboutUs />
        }
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/loading",
          element: <FullScreenloading />,
        },
        {
          path: "/admin",
          element: <AdminHome />,
        },
        {
          path: "/admin/packages",
          element: <AdminAllPackage />,
        },
        {
          path: "/admin/packages/update/:id",
          element: <AdminUpdatePackage />,
        },
        {
          path: "/admin/packageAdd",
          element: <AdminPackageAdd />,
        },
        {
          path: "/admin/basic-set-up",
          element: <BasicSetUp />,
        },
        {
          path: "/admin/basic-images",
          element: <BasicImgSetup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
