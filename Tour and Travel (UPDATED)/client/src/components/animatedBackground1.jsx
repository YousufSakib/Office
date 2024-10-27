import React from "react";

function AnimatedBackground1({ color1, color2, color3 }) {
  const containerStyle = {
    background: `linear-gradient(to left, ${color1}, ${color2})`,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  };

  const circlesStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const circleBaseStyle = {
    position: "absolute",
    display: "block",
    listStyle: "none",
    width: "20px",
    height: "20px",
    background: `${color3}`,
    bottom: "-150px",
    animation: "animate 25s linear infinite",
  };

  const circleVariants = [
    { left: "25%", width: "80px", height: "80px", animationDelay: "0s" },
    {
      left: "10%",
      width: "20px",
      height: "20px",
      animationDelay: "2s",
      animationDuration: "12s",
    },
    { left: "70%", width: "20px", height: "20px", animationDelay: "4s" },
    {
      left: "40%",
      width: "60px",
      height: "60px",
      animationDelay: "0s",
      animationDuration: "18s",
    },
    { left: "65%", width: "20px", height: "20px", animationDelay: "0s" },
    { left: "75%", width: "110px", height: "110px", animationDelay: "3s" },
    { left: "35%", width: "150px", height: "150px", animationDelay: "7s" },
    {
      left: "50%",
      width: "25px",
      height: "25px",
      animationDelay: "15s",
      animationDuration: "45s",
    },
    {
      left: "20%",
      width: "15px",
      height: "15px",
      animationDelay: "2s",
      animationDuration: "35s",
    },
    {
      left: "85%",
      width: "150px",
      height: "150px",
      animationDelay: "0s",
      animationDuration: "11s",
    },
  ];

  const circleKeyframes = `
    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }
      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{circleKeyframes}</style>
      <ul style={circlesStyle}>
        {circleVariants.map((variant, index) => (
          <li key={index} style={{ ...circleBaseStyle, ...variant }}></li>
        ))}
      </ul>
    </div>
  );
}

export default AnimatedBackground1;
