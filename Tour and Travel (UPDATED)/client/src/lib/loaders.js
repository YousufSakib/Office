import axios from "axios";
import { defer } from "react-router-dom";
import parseJSONFields from "./parseJSONFields";

export const packagePageLoader = async ({ request, params }) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/v1/packages/" + params.id;

  try {
    const packagePromise = await axios.get(url, { headers });
    const packageData = parseJSONFields(packagePromise.data, [
      "attractions",
      "images",
      "pricePerPerson",
      "tourHighLights",
    ]);
    return defer({
      packageResponse: packageData, // Return the data
    });
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw new Response("Error fetching package data", { status: 500 });
  }
};

export const homePageLoader = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/v1/packages";

  try {
    const packagePromise = await axios.get(url, { headers });
    const packageData = packagePromise.data; // Extract the data from the response
    // console.log("from homepage loader: ");
    // console.log(typeof packageData);
    // console.log(packageData); // Log the data to verify

    return defer({
      packageResponse: packageData, // Return the data
    });
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw new Response("Error fetching package data", { status: 500 });
  }
};

export const allPackagesPageLoader = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/v1/packages";

  try {
    const packagePromise = await axios.get(url, { headers });

    const packageData = parseJSONFields(packagePromise.data, [
      "attractions",
      "images",
      "pricePerPerson",
      "tourHighLights",
    ]);
    // console.log("all package page loader: ");
    // console.log(packageData[0]);
    // console.log(typeof packageData);
    // console.log(packageData);

    return defer({
      packageResponse: packageData, // Return the data
    });
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw new Response("Error fetching package data", { status: 500 });
  }
};
