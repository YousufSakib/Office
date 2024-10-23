import React, { useState } from "react";

function SingleClickableImg({ src }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleFullScreen = () => {
    var elem = document.getElementById("root");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    openFullscreen();
  };
  const handleExitFullScreen = () => {
    document.exitFullscreen();
  };
  return (
    <>
      {open || <img onClick={handleClick} src={src} alt="" />}
      {open && (
        <div
          onClick={handleClick}
          style={{
            backgroundColor: "#16151575",
            position: "fixed",
            top: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            zIndex: 10,
          }}
        >
          <img
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
              border: "none",
            }}
            src={src}
            alt=""
          />
          <span
            onClick={handleClick}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "gray",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            X
          </span>
        </div>
      )}
    </>
  );
}

export default SingleClickableImg;
