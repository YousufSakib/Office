import React from "react";
import PopularPackages from "../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import BlocksOfOfferes from "../components/blocksOfOfferes/BlocksOfOfferes";

function Allpackages() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p>Loading..</p>}>
      <Await
        resolve={data.packageResponse}
        errorElement={<>Error loading packages info</>}
      >
        {(packageResponse) => {
          return (
            <BlocksOfOfferes
              obj={{ items: packageResponse, title: "All Packages" }}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

export default Allpackages;
