import React, { useState, useEffect } from "react";
import "./adminAllPackage.scss";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import { Link } from "react-router-dom";
import ShortPara from "../../components/ShortPara";

function AdminAllPackage() {
  const [loading, setLoading] = useState(true);
  const [packageResponse, setPackageResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/packages`)
      .then((response) => {
        setPackageResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmation = confirm(
      "Are you sure you want to delete this package?",
    );
    console.log("sakib");
    if (confirmation) {
      const url = `${BACKEND_URL}/api/v1/packages/${id}`;
      console.log(url);

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
      {loading && <FullScreenloading />}
      {loading || (
        <div className="card">
          <h2>All packages</h2>
          <div className="blockOfOffers">
            {packageResponse.map((i) => (
              <div className="item" key={i.id}>
                <Link to={"/packages/" + i.id}>
                  <img src={`${BACKEND_URL}/uploads/${i.profileImg}`} alt="" />
                </Link>
                <ShortPara len={20}>{i.name}</ShortPara>
                {i?.duration && (
                  <p style={{ margin: "-20px 0 20px 0" }}>{i.duration} days</p>
                )}
                <div className="buttons">
                  <Link to={"update/" + i.id}>
                    <div className="button">Update</div>
                  </Link>
                  <div
                    className="button delete"
                    onClick={() => handleDelete(i.id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AdminAllPackage;
