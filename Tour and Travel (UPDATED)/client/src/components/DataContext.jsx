// DataContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../dynamicInfo";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1//companyInfo/1`);
      setData(response.data); // Adjust based on your response structure
      console.log("from data context");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <DataContext.Provider value={{ ...data }}>
      {children}
    </DataContext.Provider>
  );
};

export const usedata = () => {
  return useContext(DataContext);
};
