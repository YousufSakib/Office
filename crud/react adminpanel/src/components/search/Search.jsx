import React from "react";
import "./search.scss";
import { Form } from "react-router-dom";
function Search() {
  const duration = [
    {
      value: "",
      name: "All Duration",
    },
    { value: "weekend", name: "Weekend Trips" },
    {
      value: "4d",
      name: "4 days package",
    },
  ];
  const category = [
    {
      value: "",
      name: "All Categories",
    },
    { value: "wildlifetour", name: "Wild life tours" },
    {
      value: "photography",
      name: "Photography tours",
    },
  ];
  const destination = [
    { value: "", name: "All destination" },
    {
      value: "Sylhet",
      name: "Sylhet",
    },
    {
      value: "Chittagong",
      name: "Chittagong",
    },
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
          <select name="destination" id="destination">
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
