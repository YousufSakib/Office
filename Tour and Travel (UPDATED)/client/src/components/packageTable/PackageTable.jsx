import React from "react";
import "./packageTable.scss";

function PackageTable() {
  return (
    <div className="packageTable">
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <td>Duration</td>
            <td> 4 Days</td>
          </tr>
          <tr>
            <td>Location</td>
            <td> Bagerhat, Sundarbans</td>
          </tr>
          <tr>
            <td>Attractions :</td>
            <td>
              <ul>
                <li>Sixty Dome Mosque</li>
                <li>Shrine of Khan Jahan Ali</li>
                <li>Harbaria Eco-Tourism Center</li>
                <li>Kotka Wildlife Sanctuary</li>
                <li>Kochikhali Wildlife Sanctuary</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>

      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colspan="2">Tour Highlighs</th>
        </tr>
        <tr>
          <td>O</td>
          <td>
            <span>UNESCO Heritages: </span>Visit two world heritages, Sundarbans
            and Sixty Dome Mosque in a single trip.
          </td>
        </tr>
        <tr>
          <td>O</td>
          <td>
            <span>Magical Forest: </span>The silence of the forest will blow
            your mind. The tides & moonlight make it more interesting. It's a
            kind of meditation anyway.
          </td>
        </tr>
      </table>

      <table style={{ overflowX: "auto", marginTop: "40px" }}>
        <tr>
          <th colspan="2">Price for the tour (Per Person)</th>
        </tr>
        <tr>
          <td>Starting Price</td>
          <td>4500.00 TK only</td>
        </tr>
      </table>
    </div>
  );
}

export default PackageTable;
