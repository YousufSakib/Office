import React, { useState, useEffect } from "react";
import "./adminAllPackage.scss";
import axios from "axios";
import { BACKEND_URL, PACKAGES_PER_PAGE } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ShortPara from "../../components/ShortPara";

function AdminAllPackage() {
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

  const handleDelete = (id) => {
    const confirmation = confirm(
      "Are you sure you want to delete this package?",
    );

    if (confirmation) {
      const url = `${BACKEND_URL}/api/v1/packages/${id}`;

      axios
        .delete(url)
        .then((response) => {
          alert("successfully deleted!");
          window.location.reload();
        })
        .catch((error) => {
          alert("Failed to delete the package.");
          console.error(error);
        });
    }
  };
  return (
    <>
      {isLoading && <FullScreenloading />}
      {isLoading || (
        <>
          <div className="card">
            <h2>All packages</h2>
            <div className="blockOfOffers">
              {packages.map((i) => (
                <div className="item" key={i.id}>
                  <Link to={"/packages/" + i.id}>
                    <img
                      src={`${BACKEND_URL}/uploads/${i.profileImg}`}
                      alt=""
                    />
                  </Link>
                  <ShortPara len={20}>{i.name}</ShortPara>
                  {i?.duration && (
                    <p style={{ margin: "-20px 0 20px 0" }}>
                      {i.duration} days
                    </p>
                  )}
                  <div className="buttons">
                    <Link to={"update/" + i.id}>
                      <div className="button update-btn">Update</div>
                    </Link>
                    <div
                      className="button delete-btn"
                      onClick={() => handleDelete(i.id)}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{`${currentPage} of ${totalPages}`}</span>
            <button
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

export default AdminAllPackage;
