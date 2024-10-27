import React from "react";

function FlippingText({ text, color, fontSize }) {
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
    fontSize: `${fontSize}`,
    color: `${color}`,
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
