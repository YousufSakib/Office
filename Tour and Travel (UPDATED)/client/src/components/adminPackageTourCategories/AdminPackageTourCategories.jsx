import React, { useEffect, useState } from "react";
import "./adminPackageTourCategories.scss";
import { useNavigate } from "react-router-dom";
import FullScreenloading from "../fullScreenloading/FullScreenloading";
import randomChar from "../../lib/randomChar";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";

function AdminPackageTourCategories() {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [inputError, setInputError] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleHider = () => {
    setIsHidden((prev) => !prev);
  };

  const handleAdd = () => {
    if (!category.trim()) {
      setInputError("Can't be left Empty");
      return;
    }
    const addNew = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/package-tour-category`;

      const data = {
        category,
        key: randomChar(6),
      };
      console.log("from packageSetup");
      console.log("the following data is going to server");
      console.log(data);
      try {
        const response = await axios.put(url, data, { headers });
        alert("Successfully added.");
        navigate(0);
      } catch (error) {
        alert("Can not saved! Please try again");
      } finally {
        setCategory("");
      }
    };
    addNew();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/package-tour-category`;
      try {
        const response = await axios.get(url, { headers });

        setAllCategories(JSON.parse(response.data.categories));
      } catch (error) {
        console.error("Error fetching Package tour categories", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      {isLoading && <FullScreenloading />}
      {isLoading || (
        <section className="adminPackageSetup">
          <div
            className={`${
              allCategories.length === 0
                ? "allCategories no-categories"
                : "allCategories"
            }`}
          >
            <h3>All Categories</h3>
            {allCategories.length === 0 && <p>There is no category to show.</p>}

            {allCategories.length === 0 || (
              <div className="category">
                {allCategories.map((category) => (
                  <div className="item" key={category.key}>
                    <span>{category.category}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`${isHidden ? "adminPackage" : "adminPackage open"}`}>
            <div onClick={handleHider} className="hider">
              <h3>Add a new tour categoroy</h3>
              <img src="../../../../rightArrowAdmin.png" alt="" />
            </div>
            <div className="collapse">
              <div className="row">
                <label htmlFor="adminPackageCategory">
                  Enter a Category name
                </label>
                <input
                  name="category"
                  value={category}
                  id="adminPackageCategory"
                  onChange={handleCategory}
                  type="text"
                  placeholder="Adventure"
                />
                {inputError && (
                  <span style={{ color: "red", fontSize: "small" }}>
                    {inputError}
                  </span>
                )}
              </div>
              <button className="button" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default AdminPackageTourCategories;
