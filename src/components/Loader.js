import React, { Component } from "react";
import loading from "./loading.gif";

export class Loader extends Component {
  render() {
    return (
      <div className="mb-3 text-center">
        <img src={loading} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
