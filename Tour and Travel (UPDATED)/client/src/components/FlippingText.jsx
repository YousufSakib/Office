import React, { useState, useEffect } from "react";

function FlippingText({ text, color, fontSize }) {
  const [responsiveFontSize, setResponsiveFontSize] = useState(fontSize);

  useEffect(() => {
    const handleResize = () => {
      // Adjust font size based on viewport width
      if (window.innerWidth < 480) {
        setResponsiveFontSize(`calc(${fontSize} * 0.5)`); // 50% for mobile screens
      } else if (window.innerWidth < 738) {
        setResponsiveFontSize(`calc(${fontSize} * 0.75)`); // 75% for tablet screens
      } else {
        setResponsiveFontSize(fontSize); // Default font size for larger screens
      }
    };

    handleResize(); // Set font size initially
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [fontSize]);

  const keyFrame = `
    @keyframes flipasl3453ssj {
      0%, 80% {
        transform: rotateY(360deg);
      }
    }
  `;

  const spanStyle = {
    position: "relative",
    display: "inline-block",
    fontSize: responsiveFontSize,
    marginRight: "3px",
    color: color,
    textTransform: "uppercase",
    animation: "flipasl3453ssj 3s infinite",
    animationDelay: "calc(0.2s * var(--i))",
  };

  return (
    <div>
      <style>{keyFrame}</style>
      {text.split("").map((c, i) => (
        <span style={{ ...spanStyle, "--i": i + 1 }} key={i}>
          {c}
        </span>
      ))}
    </div>
  );
}

export default FlippingText;
