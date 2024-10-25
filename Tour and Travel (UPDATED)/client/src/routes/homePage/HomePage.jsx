import React from "react";
import "./homePage.scss";
import GuestsSay from "../../components/guests_say/GuestsSay";
import Attraction from "../../components/attraction/Attraction";
import PopularPackages from "../../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import ComponentLoader from "../../components/componentLoader/ComponentLoader";

function HomePage() {
  const data = useLoaderData();
  return (
    <div className="homeContent">
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

export default HomePage;
