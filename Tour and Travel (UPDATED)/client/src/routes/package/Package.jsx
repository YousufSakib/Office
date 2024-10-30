import React from "react";
import "./package.scss";
import PackageTable from "../../components/packageTable/PackageTable";
import PackageInfo from "../../components/packageInfo/PackageInfo";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
function Package() {
  const data = useLoaderData();

  return (
    <div>
      <Suspense fallback={<FullScreenloading />}>
        <Await
          resolve={data.packageResponse}
          errorElement={<>Error loading packages info</>}
        >
          {(packageResponse) => {
            // console.log("log from parent component", packageResponse); // Here logging fine but
            return <PackageInfo packageResponse={packageResponse} />;
          }}
        </Await>
      </Suspense>

      <Suspense>
        <Await
          resolve={data.packageResponse}
          errorElement={<>Error loading packages table</>}
        >
          {(packageResponse) => (
            <PackageTable packageResponse={packageResponse} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Package;
