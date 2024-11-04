import React, { useState, useEffect } from "react";
import "./search.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { duration } from "../../lib/json";
import axios from "axios";
import { BACKEND_URL, PACKAGES_PER_PAGE } from "../../../dynamicInfo";
import randomChar from "../../lib/randomChar";

const Search = React.memo(({ setQuery, setCurrentPage }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [queryData, setQueryData] = useState({
    destination:
      query
        .getAll("destination")
        .map((a) => ({ key: randomChar(5), place: a })) || [],
    category:
      query
        .getAll("category")
        .map((a) => ({ key: randomChar(5), category: a })) || [],
    duration:
      query
        .getAll("duration")
        .map((a) => ({ key: randomChar(5), duration: a })) || [],
  });

  const [allPlaces, setAllPlaces] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const getSearchParams = () => {
    const params = new URLSearchParams();
    for (const key in queryData) {
      queryData[key].forEach((value) => {
        if (key === "destination") params.append(key, value.place);
        else if (key === "category") params.append(key, value.category);
        else if (key === "duration") params.append(key, value.duration);
      });
    }
    return params.toString();
  };
  const deleteSpecificValueFromQuery = (param, valueToDelete) => {
    if (location.pathname !== "/packages") return;
    const queryParams = new URLSearchParams(location.search);
    const currentValues = queryParams.getAll(param);
    const updatedValues = currentValues.filter(
      (value) => value !== valueToDelete
    );
    // Clear the existing parameter
    queryParams.delete(param);
    // Re-add the remaining values
    updatedValues.forEach((value) => queryParams.append(param, value));
    const query = queryParams.toString();
    setQuery(query);
    setCurrentPage(1);
  };
  const appendQueryParameter = (param, valutToAdd) => {
    if (location.pathname !== "/packages") return;
    const queryParams = new URLSearchParams(location.search);
    queryParams.append(param, valutToAdd);
    const query = queryParams.toString();
    setQuery(query);
    setCurrentPage(1);
  };
  const handleClick = () => {
    const params = getSearchParams();
    //if current page is === home page then navigate to allpackage page with search query
    if (location.pathname === "/") {
      const url = `/packages?${params}`;
      console.log("~~~", url);
      navigate(url);
    }
  };
  //page=${currentPage}&limit=${PACKAGES_PER_PAGE}
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
          a.placeName.localeCompare(b.placeName)
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
          a.category.localeCompare(b.category)
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
    const removingValue = queryData.destination[removingIndex].place;
    deleteSpecificValueFromQuery("destination", removingValue);

    setQueryData({
      ...queryData,
      destination: queryData.destination.filter(
        (places, i) => i !== removingIndex
      ),
    });
  };
  const handlePlaceAdd = (event, index) => {
    const isAlreadyExisted = queryData.destination.some(
      (obj) => obj.place === event.target.value
    );
    if (isAlreadyExisted) return;
    setQueryData({
      ...queryData,
      destination: [
        ...queryData.destination,
        { key: randomChar(5), place: event.target.value },
      ],
    });
    appendQueryParameter("destination", event.target.value);
  };

  //Categories
  const handleCategoryRemove = (removingIndex) => {
    const removingValue = queryData.category[removingIndex].category;
    deleteSpecificValueFromQuery("category", removingValue);

    setQueryData({
      ...queryData,
      category: queryData.category.filter((category, i) => i !== removingIndex),
    });
  };
  const handleCategoryAdd = (event, index) => {
    const isAlreadyExisted = queryData.category.some(
      (obj) => obj.category === event.target.value
    );
    if (isAlreadyExisted) return;
    setQueryData({
      ...queryData,
      category: [
        ...queryData.category,
        { key: randomChar(5), category: event.target.value },
      ],
    });
    appendQueryParameter("category", event.target.value);
  };

  //duration
  const handleDurationRemove = (removingIndex) => {
    const removingValue = queryData.duration[removingIndex].duration;
    deleteSpecificValueFromQuery("duration", removingValue);

    setQueryData({
      ...queryData,
      duration: queryData.duration.filter((duration, i) => i !== removingIndex),
    });
  };
  const handleDurationAdd = (event, index) => {
    const isAlreadyExisted = queryData.duration.some(
      (obj) => obj.duration === event.target.value
    );
    if (isAlreadyExisted) return;
    setQueryData({
      ...queryData,
      duration: [
        ...queryData.duration,
        { key: randomChar(5), duration: event.target.value },
      ],
    });
    appendQueryParameter("duration", event.target.value);
  };

  return (
    <div className="searchPackages">
      <div>
        <div className="row">
          <div className="placesContainer">
            {queryData.destination.map((obj, index) => (
              <p key={obj.key}>
                {obj.place}
                <span onClick={(event) => handlePlaceRemove(index)}>X</span>
              </p>
            ))}
          </div>
          <label htmlFor="searchPlace">Select tour places</label>
          <div className="select">
            <select id="searchPlace" onChange={handlePlaceAdd} value={"none"}>
              <option value="">All selected</option>
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
            {queryData.category.map((obj, index) => (
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
              <option value="">All selected</option>
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
            {queryData.duration.map((obj, index) => (
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
      {location.pathname === "/" && (
        <button onClick={handleClick} className="button" type="submit">
          Search
        </button>
      )}
    </div>
  );
});

export default Search;
