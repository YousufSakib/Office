import React from "react";
import "./placesToVisit.scss";
import BlocksOfOfferes from "../../components/blocksOfOfferes/BlocksOfOfferes";
import { placesToVisit, topPlaces } from "../../lib/json_updated";
import HavingPlane from "../../components/havingPlane/HavingPlane";
import ContactUsForm from "../../components/contactUsForm/ContactUsForm";
function PlacesToVisit() {
  return (
    <div className="placesToVisit">
      <BlocksOfOfferes obj={topPlaces} />
      <BlocksOfOfferes obj={placesToVisit} />
      <HavingPlane />
      <ContactUsForm />
    </div>
  );
}

export default PlacesToVisit;
