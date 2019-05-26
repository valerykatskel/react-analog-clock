import React from "react";

const NumberSlider = props => {
  return (
    <div className="my-5">
      <label htmlFor="customRange1">Size of clock: </label>
      <input type="range" className="custom-range" id="customRange1" />
    </div>
  );
}

export { NumberSlider }