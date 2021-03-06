import Loader from "react-loader-spinner";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.styles.css";

const LoaderCircle = () => {
  return (
    <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderCircle;
