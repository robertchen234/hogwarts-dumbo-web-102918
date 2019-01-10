import React from "react";

const PorkDetails = props => {
  return (
    <div className="pork-details">
      <p>Specialty: {props.specialty}</p>
      <p>Weight: {props.weight}</p>
      <p>Highest Medal Achieved: {props.medal}</p>
    </div>
  );
};

export default PorkDetails;
