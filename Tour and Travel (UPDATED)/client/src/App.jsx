import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, SimpleLayout } from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ContactUs from "./routes/contactUs/ContactUs";
import MeetBangladesh from "./routes/meetBangadesh/MeetBangladesh";
import Package from "./routes/package/Package";
import BookTour from "./routes/bookTour/BookTour";
import { packagePageLoader, homePageLoader } from "./lib/loaders";
import Allpackages from "./routes/allPackages/Allpackages";
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
import AdminPackageSetup from "./routes/adminPackageSetup/AdminPackageSetup";
import AdminPackageTourCategories from "./components/adminPackageTourCategories/AdminPackageTourCategories";
import BookPackage from "./routes/bookPackage/BookPackage";
import AdminCustomerBooking from "./routes/admin-customer-booking/Admin-customer-booking";
import AdminCustomerBookingCancelled from "./routes/admin/customer-booking/AdminCustomerBookingCancelled";
import AdminCustomerBookingNew from "./routes/admin/customer-booking/new/AdminCustomerBookingNew";

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
        {
          path: "book-package/:id",
          element: <BookPackage />,
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
          path: "/admin/customer-bookings/new",
          element: <AdminCustomerBookingNew />,
        },
        {
          path: "/admin/customer-bookings/cancelled",
          element: <AdminCustomerBookingCancelled />,
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
          path: "/admin/packageSetup",
          element: <AdminPackageSetup />,
        },
        {
          path: "/admin/test",
          element: <AdminPackageTourCategories />,
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
