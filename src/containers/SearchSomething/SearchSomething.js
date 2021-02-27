import React from "react";
import arrow from "../../images/arrow.png";

const SearchSomething = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <img src={arrow} width={300} alt="arrow" />
      <h1 style={{ fontFamily: "monospace", fontSize: "20px" }}>
        Search Something
      </h1>
    </div>
  );
};

export default SearchSomething;
