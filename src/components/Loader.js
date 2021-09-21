import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div className="mb-3 text-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
