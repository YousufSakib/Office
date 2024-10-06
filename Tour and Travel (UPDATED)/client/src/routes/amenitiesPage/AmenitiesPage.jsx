import React from "react";
import "./amenitiesPage.scss";
import Amenities from "../../components/amenities/Amenities ";
function AmenitiesPage() {
  const obj = {
    Des: "Cursus tempus, tincidunt quis sem sapien id non eget sed in consequat tellus phasellus orci in semper elit porttitor eget metus.",
    Len: 3,
    ButtonText: "Get Bookings",
    ButtonLink: "#",
  };

  return (
    <div className="amenitiesPage">
      <Amenities {...obj} />
    </div>
  );
}

export default AmenitiesPage;
