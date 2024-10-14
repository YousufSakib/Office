import React, { useEffect } from "react";
import PopularPackages from "../components/PopularPackages";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import BlocksOfOfferes from "../components/blocksOfOfferes/BlocksOfOfferes";
import slowScrollToTop from "../lib/slowScrolltoTop";

function Allpackages() {
  const data = useLoaderData();
  useEffect(() => {
    const targetElement = document.getElementById("alPackagePageSpan");
    slowScrollToTop(targetElement, 50, 1000);
    // targetElement.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <span id="alPackagePageSpan"></span>
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
    </>
  );
}

export default Allpackages;
