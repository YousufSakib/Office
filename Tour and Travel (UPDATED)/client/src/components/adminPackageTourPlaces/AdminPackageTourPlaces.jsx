import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminPackageSetup.scss";
import districtJson from "../../lib/districts";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import randomChar from "../../lib/randomChar";

function AdminPackageSetup() {
  const [divisions, setDivision] = useState(() => Object.keys(districtJson));
  const [districts, setDistricts] = useState(() =>
    Object.values(districtJson).flat().sort()
  );
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(
    districtJson[divisions[0]][0]
  );
  const [placeName, setPlaceName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allPlaces, setAllPlaces] = useState([]);
  const [inputError, setInputError] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();
  const handlePlace = (event) => {
    setPlaceName(event.target.value);
  };
  const handleDivision = (event) => {
    const division = event.target.value;
    setSelectedDivision(division);
    const newDistricts = districtJson[division];
    setDistricts(newDistricts.sort());
    setSelectedDistrict(newDistricts[0]); // Reset the selected district to the first one
  };

  const handleDistrict = (event) => setSelectedDistrict(event.target.value);
  const handleHider = () => {
    setIsHidden((prev) => !prev);
  };
  const handleAdd = () => {
    if (!placeName?.trim()) {
      setInputError("Can't be left Empty");
      return;
    }
    const addNew = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/packagePlaces`;
      const place = {
        placeName,
        division: selectedDivision,
        district: selectedDistrict,
        key: randomChar(6),
      };
      console.log("from packageSetup");
      console.log("the following data is going to server");
      console.log(place);
      try {
        const response = await axios.post(url, place, { headers });
        alert("Successful saved.");
        navigate(0);
      } catch (error) {
        alert("Can not saved! Please try again");
      } finally {
        setIsLoading(false);
        setPlaceName("");
      }
    };
    addNew();
  };
  useEffect(() => {
    setDistricts(districtJson[selectedDivision].sort());
    setSelectedDistrict(districtJson[selectedDivision][0]); // Reset when division changes
  }, [selectedDivision]);

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/packagePlaces`;
      try {
        const response = await axios.get(url, { headers });
        setAllPlaces(response.data);
      } catch (error) {
        console.error("Error fetching package places", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <>
      {isLoading && <FullScreenloading />}
      {isLoading || (
        <>
        <section className="adminPackageSetup">
          <div className="allDestination">
            <h3>All Destination/places</h3>
            {allPlaces.length === 0 && <p>There is no places to show.</p>}

            {allPlaces.length === 0 || (
              <div className="places">
                {allPlaces.map((place) => (
                  <div className="item" key={place.key}>
                    <span>{`${place.placeName} ,`}</span>
                    <span>{` ${place.district}`}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              isHidden ? "adminPackage" : "adminPackage open"
            }`}
          >
            <div onClick={handleHider} className="hider">
              <h3>Add a new location/spot/destination</h3>
              <img src="../../../../rightArrowAdmin.png" alt="" />
            </div>
            <div className="collapse">
              <div className="row">
                <label htmlFor="divisionsAdminPackage">Select a Division</label>
                <div className="select">
                  <select
                    id="divisionsAdminPackage"
                    value={selectedDivision}
                    onChange={handleDivision}
                  >
                    {divisions.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <span className="focus"></span>
                </div>
              </div>

              <div className="row">
                <label htmlFor="districtsAdminPackage">Select a District</label>
                <div className="select">
                  <select
                    id="districtsAdminPackage"
                    value={selectedDistrict}
                    onChange={handleDistrict}
                  >
                    {districts.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <span className="focus"></span>
                </div>
              </div>
              <div className="row">
                <label htmlFor="adminPackagePlace">Enter a place name</label>
                <input
                  name="placeName"
                  value={placeName}
                  id="adminPackagePlace"
                  onChange={handlePlace}
                  type="text"
                />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {inputError}
                </span>
              </div>
              <button className="button" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </section>


        
        </>

      )}
    </>
  );
}

export default AdminPackageSetup;
