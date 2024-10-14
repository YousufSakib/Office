import React from "react";
import "./homePage.scss";
import GuestsSay from "../../components/guests_say/GuestsSay";
import Attraction from "../../components/attraction/Attraction";
import PopularPackages from "../../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import axios from "axios";
import ComponentLoader from "../../components/componentLoader/ComponentLoader";
function HomePage() {
  const data = useLoaderData();
  return (
    <div className="homeContent">
      {/* <Experience /> */}
      {/* <Amenities {...obj} /> */}
      {/* <RoomCard /> */}
      <Attraction />
      {console.log("HomePage is rendering")}
      <Suspense fallback={<ComponentLoader />}>
        <Await
          resolve={data.packageResponse}
          errorElement={<>Error loading packages info</>}
        >
          {(packageResponse) => {
            return <PopularPackages packageResponse={packageResponse} />; // in package info component the object got undefined
          }}
        </Await>
      </Suspense>

      <GuestsSay />
    </div>
  );
}
// function HomePage() {
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [packageResponse, setPackageResponse] = useState(null); // Store fetched data

//   useEffect(() => {
//     // Simulate a data fetch
//     axios
//       .get(`${BACKEND_URL}/api/v1/packages`)
//       .then((response) => {
//         setPackageResponse(response.data);
//         setLoading(false); // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false); // Even on error, set loading to false
//       });
//   }, []);

//   return (
//     <>
//       {loading && <ComponentLoader />}
//       {loading || <PopularPackages packageResponse={packageResponse} />}
//     </>
//   );
// }
export default HomePage;
