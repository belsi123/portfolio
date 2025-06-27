import React from "react";

const backgroundStyle = {
  minHeight: "100vh",
  background: "linear-gradient(0deg, #e0f7fa 0%, #fff 70%)",
  fontFamily: "Segoe UI, Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

export default function BackgroundWrapper({ children }) {
  return <div style={backgroundStyle}>{children}</div>;
}