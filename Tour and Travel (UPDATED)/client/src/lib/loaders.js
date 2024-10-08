import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const packagePageLoder = async ({ request, params }) => {
  const res = await apiRequest("/packages/" + params.id);
  return res.data;
};
