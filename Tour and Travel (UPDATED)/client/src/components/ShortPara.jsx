import React from "react";

function ShortPara({ children, len }) {
  // console.log(typeof children);
  const truncate = children?.slice(0, len) + "...";
  return <p>{truncate}</p>;
}

export default ShortPara;
