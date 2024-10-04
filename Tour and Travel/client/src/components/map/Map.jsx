import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Footer from "../footer/Footer";
function Map() {
  const position = [23.8041, 90.4152];

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
        <Popup className="mapPopUp">
          <img src="office.jpg" alt="" />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
