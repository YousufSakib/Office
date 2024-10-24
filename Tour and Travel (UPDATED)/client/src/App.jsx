import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, SimpleLayout } from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ContactUs from "./routes/contactUs/ContactUs";
import MeetBangladesh from "./routes/meetBangadesh/MeetBangladesh";
import Package from "./routes/package/Package";
import BookTour from "./routes/bookTour/BookTour";
import {
  packagePageLoader,
  homePageLoader,
  allPackagesPageLoader,
} from "./lib/loaders";
import Allpackages from "./routes/Allpackages";
import AdminLayout from "./routes/adminLayout/AdminLayout";
import AdminPackageAdd from "./routes/adminPackageAdd/AdminPackageAdd";
import AdminHome from "./routes/adminHome/AdminHome";
import AdminAllPackage from "./routes/adminAllPackage/AdminAllPackage";
import FullScreenloading from "./components/fullScreenloading/FullScreenloading";
import AdminUpdatePackage from "./routes/adminUpdatePackage/AdminUpdatePackage";
import CompanyInfoSetUp from "./routes/companyInfoSetUp/CompanyInfoSetUp";
import BasicImgSetup from "./routes/basicImgSetup/basicImgSetup";
import AboutUs from "./routes/aboutUs/AboutUs";
import Places_to_visit from "./routes/Places_to_visit/Places_to_visit";
import Test from "./routes/test/Test";

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
          element: <Places_to_visit />,
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
      path: "/",
      element: <SimpleLayout />, // Alternative layout for package-related routes
      children: [
        {
          path: "packages",
          element: <Allpackages />,
          loader: allPackagesPageLoader,
        },
        {
          path: "packages/:id",
          element: <Package />,
          loader: packagePageLoader,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
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
          path: "/admin/companyInfoSetUp",
          element: <CompanyInfoSetUp />,
        },
        {
          path: "/admin/basic-images",
          element: <BasicImgSetup />,
        },
        {
          path: "/admin/test",
          element: <Test />,
        },
        {
          path: "/admin/loading",
          element: <FullScreenloading />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
