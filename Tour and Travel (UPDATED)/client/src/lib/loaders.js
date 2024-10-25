import axios from "axios";
import { defer } from "react-router-dom";
import { BACKEND_URL } from "../../dynamicInfo";

export const packagePageLoader = async ({ request, params }) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = `${BACKEND_URL}/api/v1/packages/${params.id}`;

  try {
    const packagePromise = await axios.get(url, { headers });

    const images = JSON.parse(packagePromise.data.images);

    const pricePerPerson = JSON.parse(
      JSON.parse(packagePromise.data.pricePerPerson),
    );
    const tourHighLights = JSON.parse(
      JSON.parse(packagePromise.data.tourHighLights),
    );

    const newObj = {
      ...packagePromise.data,
      images,
      pricePerPerson,
      tourHighLights,
    };

    return defer({
      packageResponse: newObj, // Return the data
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
  const url = `${BACKEND_URL}/api/v1/popularPackages`;

  try {
    const packagePromise = await axios.get(url, { headers });
    const packageData = packagePromise.data; // Extract the data from the response
    console.log("from homepage loader: ");
    console.log(typeof packageData);
    console.log(packageData); // Log the data to verify

    return defer({
      packageResponse: packageData.data, // Return the data
    });
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw new Response("Error fetching package data", { status: 500 });
  }
};
