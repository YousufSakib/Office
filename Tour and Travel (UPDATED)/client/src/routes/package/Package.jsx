import React from "react";
import "./package.scss";
import PackageTable from "../../components/packageTable/PackageTable";
import PackageInfo from "../../components/packageInfo/PackageInfo";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function Package() {
  const data = useLoaderData();

  return (
    <div>
      <Suspense fallback={<p>Loading..</p>}>
        <Await
          resolve={data.packageResponse}
          errorElement={<>Error loading packages info</>}
        >
          {(packageResponse) => {
            // console.log("log from parent component", packageResponse); // Here logging fine but
            return <PackageInfo packageResponse={packageResponse} />; // in package info component the object got undefined
          }}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Loading..</p>}>
        <Await
          resolve={data.packageResponse}
          errorElement={<>Error loading packages table</>}
        >
          {(packageResponse) => (
            <PackageTable packageResponse={packageResponse} /> // in package info component the object got undefined
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Package;
