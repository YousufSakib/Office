import React from "react";
import "./packageTable.scss";

function PackageTable({ packageResponse }) {
  return (
    <div className="packageTable">
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <td>Categories</td>
            <td>
              {packageResponse.category.map((obj, index) => (
                <span key={obj.key}>{`${obj.category}${
                  packageResponse.category.length !== index + 1 ? " , " : ""
                }`}</span>
              ))}
            </td>
          </tr>
          <tr>
            <td>Duration : </td>
            <td> {" " + packageResponse?.duration} Days</td>
          </tr>
          <tr>
            <td>Location : </td>
            <td>
              {" "}
              {packageResponse?.destination.map((obj, index) => (
                <span key={obj.key}>
                  {`${obj.place}${
                    packageResponse.destination.length !== index + 1
                      ? " , "
                      : ""
                  }`}
                </span>
              ))}
            </td>
          </tr>
        </table>
      </div>
      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colspan="2">Package Highlights</th>
        </tr>
        {packageResponse.tourHighLights.map((i) => (
          <tr key={i.key}>
            <td>
              <span>{i.highlight}</span>
            </td>
            <td>{i.description}</td>
          </tr>
        ))}
      </table>
      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colSpan="2">Price for the package (Per Person)</th>
        </tr>
        {packageResponse.pricePerPerson.map((i) => (
          <tr key={i.key}>
            <td className="price number">{i.priceType}</td>
            <td className="price number">{i.priceTaka + " TK only"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PackageTable;
