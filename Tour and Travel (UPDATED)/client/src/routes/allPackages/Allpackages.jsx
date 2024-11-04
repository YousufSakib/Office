import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import BlocksOfOfferes from "../../components/blocksOfOfferes/BlocksOfOfferes";
import slowScrollToTop from "../../lib/slowScrolltoTop";
import { BACKEND_URL, PACKAGES_PER_PAGE } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import { useLocation, useNavigate } from "react-router-dom";
import "./allPackages.scss";
import Search from "../../components/search/Search";

function Allpackages() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [packages, setPackages] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const targetElement = document.getElementById("alPackagePageSpan");
    slowScrollToTop(targetElement, 50, 1000);
  }, []);
  console.log("~~~", "location.search1", location.search);

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      setError(null);
      const headers = {
        "Content-Type": "application/json",
      };
      ///packages?}&page=77&limit=4
      console.log("+++", location.search);
      let URL, queryParam;
      if (query) {
        queryParam = new URLSearchParams(query);
      } else {
        queryParam = new URLSearchParams(location.search);
      }

      queryParam.set("page", currentPage);
      queryParam.set("limit", PACKAGES_PER_PAGE);
      navigate(`?${queryParam.toString()}`);
      URL = `${BACKEND_URL}/api/v1/packages?${queryParam.toString()}`;

      try {
        const response = await axios.get(URL, { headers });
        setPackages(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setCurrentPage(response.data.pagination.currentPage);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setError("Error fetching package data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, [currentPage, query]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <span id="alPackagePageSpan"></span>
      {isLoading && <FullScreenloading />}
      {error && <p>{error}</p>}
      {isLoading || (
        <>
          <Search setQuery={setQuery} setCurrentPage={setCurrentPage} />
          <BlocksOfOfferes obj={{ items: packages, title: "Packages" }} />
          <div className="pagination">
            <button
              className="button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{`${currentPage} of ${totalPages}`}</span>
            <button
              className="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Allpackages;
