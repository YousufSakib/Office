import React from "react";
import "./packageTable.scss";

function PackageTable({ packageResponse }) {
  // console.log("from package table ", packageResponse.duration);
  // console.log("from packageTable ");
  // console.log(packageResponse);
  const pricePerPerson = JSON.parse(packageResponse.pricePerPerson || []);
  const tourHighLights = JSON.parse(packageResponse.tourHighLights || []);
  const attractions = JSON.parse(packageResponse.attractions || []);
  // console.log("pricePerPerson");
  // console.log(pricePerPerson);
  // console.log("tourHighLights");
  // console.log(tourHighLights);
  // console.log("attractions");
  // console.log(attractions);

  return (
    <div className="packageTable">
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <td>Duration : </td>
            <td> {" " + packageResponse?.duration} Days</td>
          </tr>
          <tr>
            <td>Location : </td>
            <td> {" " + packageResponse?.destination}</td>
          </tr>
          <tr>
            <td>Attractions :</td>
            <td>
              <ul>
                {attractions.map((i) => (
                  <li key={i.key}>{i.attraction}</li>
                ))}
              </ul>
            </td>
          </tr>
        </table>
      </div>

      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colspan="2">Tour Highlighs</th>
        </tr>
        {tourHighLights.map((i) => (
          <tr key={i.key}>
            <td>O</td>
            <td>
              <span>{i.highlight + " "}</span>
              {i.description}
            </td>
          </tr>
        ))}
      </table>

      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colspan="2">Price for the tour (Per Person)</th>
        </tr>
        {pricePerPerson.map((i) => (
          <tr key={i.key}>
            <td>{i.priceType}</td>
            <td>{i.priceTaka + " TK only"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PackageTable;
