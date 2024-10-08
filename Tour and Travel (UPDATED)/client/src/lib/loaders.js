import axios from "axios";
import { defer } from "react-router-dom";

export const packagePageLoader = async ({ request, params }) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/v1/packages/" + params.id;

  try {
    const packagePromise = await axios.get(url, { headers });
    const packageData = packagePromise.data; // Extract the data from the response
    // console.log(packageData); // Log the data to verify
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
    const packageData = packagePromise.data; // Extract the data from the response
    // console.log(packageData); // Log the data to verify

    return defer({
      packageResponse: packageData, // Return the data
    });
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw new Response("Error fetching package data", { status: 500 });
  }
};
