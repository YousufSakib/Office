import React from "react";
import "./search.scss";
import { Form } from "react-router-dom";
function Search() {
  const duration = [
    {
      value: "",
      name: "All selected",
    },
    { value: "weekend", name: "Weekend Trips" },
    {
      value: "2d",
      name: "2 days package",
    },
    {
      value: "3d",
      name: "3 days package",
    },
    {
      value: "4d",
      name: "4 days package",
    },
    {
      value: "5d",
      name: "5 days package",
    },
    {
      value: "6d",
      name: "6 days package",
    },
    {
      value: "7d",
      name: "7 days package",
    },
    {
      value: "7+d",
      name: "7+ days package",
    },
  ];
  const category = [
    {
      value: "",
      name: "All selected",
    },
    {
      value: "wildlife",
      name: "wildlife",
    },
    {
      value: "photography",
      name: "photography",
    },
    {
      value: "adventure",
      name: "adventure",
    },
    {
      value: "cultural",
      name: "cultural",
    },
    {
      value: "culinary",
      name: "culinary",
    },
    {
      value: "hitorical",
      name: "hitorical",
    },
    {
      value: "ecoTour", 
      name: "eco_Tour"
    },
    {
      value: "luxuryTour",
      name: "luxury_Tour"
    }
  ];
  const destination = [
    { value: "", name: "All selected" },
    {
      value: "sylhet",
      name: "sylhet",
    },
    {
      value: "chittagong",
      name: "chittagong",
    },
    {
      value: "dhaka",
      name: "dhaka"
    },
    {
      value: "sundarbans",
      name: "sundarbans",
    },
    {
      value: "coxBazar",
      name: "cox Bazar",
    },
    {
      value: "rangamati",
      name: "rangamati",
    },
    {
      value: "bandarban",
      name: "bandarban",
    },
    {
      value: "sundarbans",
      name: "sundarbans",
    },
    {
      value: "sundarbans",
      name: "sundarbans",
    }
  ];

  return (
    <Form className="searchPackages">
      <div>
        <div className="col-left">
          <label htmlFor="destination">Choose a destination</label>
          <label htmlFor="duration">Choose a duration</label>
          <label htmlFor="category">Choose a category</label>
        </div>
        <div className="col-right">
          <select name="destination" id="destination" multiple>
            {destination.map((i) => (
              <option value={i.value} key={i.key}>
                {i.name}
              </option>
            ))}
          </select>

          <select name="duration" id="duration">
            {duration.map((i) => (
              <option value={i.value} key={i.key}>
                {i.name}
              </option>
            ))}
          </select>

          <select name="category" id="category">
            {category.map((i) => (
              <option value={i.value} key={i.key}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit">Search</button>
    </Form>
  );
}

export default Search;
