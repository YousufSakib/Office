import React from "react";
import PopularPackages from "../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function Allpackages() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p>Loading..</p>}>
      <Await
        resolve={data.packageResponse}
        errorElement={<>Error loading packages info</>}
      >
        {(packageResponse) => {
          console.log("form home page");
          console.log(packageResponse);
          return <PopularPackages packageResponse={packageResponse} />; // in package info component the object got undefined
        }}
      </Await>
    </Suspense>
  );
}

export default Allpackages;
