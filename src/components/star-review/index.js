import React from "react";
import ReactDOM from "react-dom";
import Rating from "./Rating";

function Star() {
  return (

      <Rating
        size={48}
        icon="star"
        scale={5}
        fillColor="gold"
        strokeColor="grey"
      />
  );
}

export default Star()
