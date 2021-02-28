import React from "react";
import { data } from "../data";
import CirlesCard from "./CirlesCard";
const ImgTeam = () => {
  return (
    <div className="card ctm-border-radius shadow-sm" style={{ margin: "2rem" }}>
      <div className="card-header">
        <div className="d-inline-block padding">
          <h2 className="card-title mb-0">Focus Technologies</h2>
          <p className="mb-0">Head Office</p>
        </div>
      </div>

      <div className="card-body">
        <h4 className="card-title">Members</h4>
        {data.employees.map((employee) => (
          <CirlesCard
            _id={employee._id}
            name={employee.preferredname}
            image={employee.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgTeam;
