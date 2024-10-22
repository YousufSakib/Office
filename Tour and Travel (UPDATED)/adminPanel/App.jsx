import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/Layout";
import Dashbord from "./routes/Dashbord";
import "./App.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main layout for primary routes
      children: [
        {
          path: "/",
          element: <Dashbord />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
