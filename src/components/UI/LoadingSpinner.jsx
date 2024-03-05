import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const spinnerStyle = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4a7e73",
  position: "absolute",
  top: "45%",
  left: "50%",
};

export default function LoadingSpinner({ isLoading }) {
  return (
    <div className="sweet-loading">
      <FadeLoader
        color="#4a7e73"
        isloading={isLoading}
        cssOverride={spinnerStyle}
        radius={2}
        width={7}
        margin={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
