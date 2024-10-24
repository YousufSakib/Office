import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { useInfo } from "../CompanyInfoContext";
function Map() {
  const position = [23.740824, 90.378509];
  const { companyName, aboutUs } = useInfo();
  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <h4>{companyName}</h4>
          <p>
            <img src="office.jpg" alt="" />
            {aboutUs}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
