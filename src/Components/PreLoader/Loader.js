import React from "react";
import logo from "../../assets/logo.png";
const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="logo" className="loader-img" />
      <span className="loaderTitle"></span>
    </div>
  );
};
export default Loader;
