import React, { useState, useEffect } from "react";
import "./search.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { duration } from "../../lib/json";
import axios from "axios";
import { BACKEND_URL, PACKAGES_PER_PAGE } from "../../../dynamicInfo";
import randomChar from "../../lib/randomChar";

const Search = React.memo(({ setUrl, currentPage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: [],
    category: [],
    duration: [],
  });
  const [allPlaces, setAllPlaces] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const location = useLocation();
  const getSearchParams = () => {
    const params = new URLSearchParams();
    for (const key in formData) {
      formData[key].forEach((value) => {
        console.log("777777777777777777777777777");
        console.log(key, value);
        if (key === "destination") params.append(key, value.place);
        else if (key === "category") params.append(key, value.category);
        else if (key === "duration") params.append(key, value.duration);
      });
    }
    return params.toString();
  };

  const handleClick = () => {
    const params = getSearchParams();
    //if current page is === home page then navigate to allpackage page wit search query
    if (location.pathname === "/") {
      navigate(`/packages?${params}`);
    } else {
      const url = `${BACKEND_URL}/api/v1/packages?page=${currentPage}&limit=${PACKAGES_PER_PAGE}&${params}`;
      setUrl(url);
    }
  };

  /*All Places and Categories for dropdown items*/
  useEffect(() => {
    const fetchPlacesAndCategory = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        let url = `${BACKEND_URL}/api/v1/packagePlaces`;
        const { data: placesData } = await axios.get(url, { headers });

        url = `${BACKEND_URL}/api/v1/package-tour-category`;
        const { data: categoriesData } = await axios.get(url, { headers });

        const sortedPlaces = placesData.sort((a, b) =>
          a.placeName.localeCompare(b.placeName),
        );
        setAllPlaces(sortedPlaces);
        console.log("//////////////search ////////////////////////////");
        console.log("sorted places:", sortedPlaces);
        //sort and update state for category
        let unsortedCategories = [];
        try {
          unsortedCategories = JSON.parse(categoriesData.categories);
        } catch (error) {
          console.error("Error parsing categories data", error);
        }

        const sortedCategories = unsortedCategories.sort((a, b) =>
          a.category.localeCompare(b.category),
        );
        setAllCategories(sortedCategories);
        console.log("Sorted categories:", sortedCategories);
      } catch (error) {
        console.error("Error fetching package places", error);
      }
    };

    fetchPlacesAndCategory();
  }, []);
  //Places
  const handlePlaceRemove = (removingIndex) => {
    setFormData({
      ...formData,
      destination: formData.destination.filter(
        (places, i) => i !== removingIndex,
      ),
    });
  };
  const handlePlaceAdd = (event, index) => {
    const isAlreadyExisted = formData.destination.some(
      (obj) => obj.place === event.target.value,
    );
    if (isAlreadyExisted) return;
    setFormData({
      ...formData,
      destination: [
        ...formData.destination,
        { key: randomChar(5), place: event.target.value },
      ],
    });
  };

  //Categories
  const handleCategoryRemove = (removingIndex) => {
    setFormData({
      ...formData,
      category: formData.category.filter((category, i) => i !== removingIndex),
    });
  };
  const handleCategoryAdd = (event, index) => {
    const isAlreadyExisted = formData.category.some(
      (obj) => obj.category === event.target.value,
    );
    if (isAlreadyExisted) return;
    setFormData({
      ...formData,
      category: [
        ...formData.category,
        { key: randomChar(5), category: event.target.value },
      ],
    });
  };

  //duration
  const handleDurationRemove = (removingIndex) => {
    setFormData({
      ...formData,
      duration: formData.duration.filter((duration, i) => i !== removingIndex),
    });
  };
  const handleDurationAdd = (event, index) => {
    const isAlreadyExisted = formData.duration.some(
      (obj) => obj.duration === event.target.value,
    );
    if (isAlreadyExisted) return;
    setFormData({
      ...formData,
      duration: [
        ...formData.duration,
        { key: randomChar(5), duration: event.target.value },
      ],
    });
  };

  return (
    <div className="searchPackages">
      <div>
        {/* <div className="col-left">
          <label htmlFor="destination">Choose one or more destinations</label>
          <label htmlFor="duration">Choose a duration</label>
          <label htmlFor="category">Choose a category</label>
        </div> */}
        <div className="row">
          <div className="placesContainer">
            {formData.destination.map((obj, index) => (
              <p key={obj.key}>
                {obj.place}
                <span onClick={(event) => handlePlaceRemove(index)}>X</span>
              </p>
            ))}
          </div>
          <label htmlFor="searchPlace">Select tour places</label>
          <div className="select">
            <select id="searchPlace" onChange={handlePlaceAdd} value={"none"}>
              {allPlaces.map((place) => (
                <option key={`${place.placeName}`} value={`${place.placeName}`}>
                  {`${place.placeName}, ${place.district}`}
                </option>
              ))}
            </select>
            <span className="focus"></span>
          </div>
        </div>

        <div className="row">
          <div className="placesContainer">
            {formData.category.map((obj, index) => (
              <p key={obj.key}>
                {obj.category}
                <span onClick={(event) => handleCategoryRemove(index)}>X</span>
              </p>
            ))}
          </div>
          <label htmlFor="adminPackageAddTourCategory">
            Select tour categories
          </label>
          <div className="select">
            <select
              id="adminPackageAddTourCategory"
              onChange={handleCategoryAdd}
              value={"none"}
            >
              {allCategories.map((obj) => (
                <option key={`${obj.key}`} value={`${obj.category}`}>
                  {`${obj.category}`}
                </option>
              ))}
            </select>
            <span className="focus"></span>
          </div>
        </div>

        <div className="row">
          <div className="placesContainer">
            {formData.duration.map((obj, index) => (
              <p className="number" key={obj.key}>
                {obj.duration}
                <span onClick={(event) => handleDurationRemove(index)}>X</span>
              </p>
            ))}
          </div>
          <label htmlFor="searchDuration">Select tour duration</label>
          <div className="select">
            <select
              id="searchDuration"
              onChange={handleDurationAdd}
              value={"none"}
            >
              {duration.map((obj) => (
                <option key={`${obj.key}`} value={`${obj.value}`}>
                  {`${obj.name}`}
                </option>
              ))}
            </select>
            <span className="focus"></span>
          </div>
        </div>
      </div>

      <button onClick={handleClick} className="button" type="submit">
        Search
      </button>
    </div>
  );
});

export default Search;
