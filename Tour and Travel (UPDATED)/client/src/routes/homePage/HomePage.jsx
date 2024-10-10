import React from "react";
import "./homePage.scss";
import GuestsSay from "../../components/guests_say/GuestsSay";
import Attraction from "../../components/attraction/Attraction";
import PopularPackages from "../../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
function HomePage() {
  const data = useLoaderData();
  return (
    <div className="homeContent">
      {/* <Experience /> */}
      {/* <Amenities {...obj} /> */}
      {/* <RoomCard /> */}
      <Attraction />

      <Suspense fallback={<FullScreenloading />}>
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
//   const [loading, setLoading] = useState(true);  // Track loading state
//   const [data, setData] = useState(null);  // Store fetched data

//   useEffect(() => {
//     // Simulate a data fetch
//     axios.get('http://localhost:5000/api/data')
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);  // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);  // Even on error, set loading to false
//       });
//   }, []);
// }
export default HomePage;
