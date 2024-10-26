// InfoContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../dynamicInfo";

const InfoContext = createContext();

const CompanyInfoProvider = ({ children }) => {
  const [data, setData] = useState({});

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/companyInfo`);
      setData(response.data); 
      console.log("from data context");
      console.log(response.data);
    } catch (error) {
      console.log("from data context");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <InfoContext.Provider value={{ ...data }}>
      {children}
    </InfoContext.Provider>
  );
};

const useInfo = () => {
  return useContext(InfoContext);
};

export {CompanyInfoProvider, useInfo}