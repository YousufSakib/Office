import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import BlocksOfOfferes from "../../components/blocksOfOfferes/BlocksOfOfferes";
import slowScrollToTop from "../../lib/slowScrolltoTop";
import { BACKEND_URL, PACKAGES_PER_PAGE } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import { useLocation, useNavigate } from "react-router-dom";
import "./allPackages.scss";

function Allpackages() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialPage = parseInt(query.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage || 1);
  const [packages, setPackages] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const targetElement = document.getElementById("alPackagePageSpan");
    slowScrollToTop(targetElement, 50, 1000);
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      setError(null);
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/packages?page=${currentPage}&limit=${PACKAGES_PER_PAGE}`;

      try {
        const response = await axios.get(url, { headers });
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
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigate(`?page=${currentPage + 1}&limit=${PACKAGES_PER_PAGE}`); //Update URL
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`?page=${currentPage - 1}&limit=${PACKAGES_PER_PAGE}`);
    }
  };

  return (
    <>
      <span id="alPackagePageSpan"></span>
      {isLoading && <FullScreenloading />}
      {error && <p>{error}</p>}
      <BlocksOfOfferes obj={{ items: packages, title: "Packages" }} />
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Allpackages;
