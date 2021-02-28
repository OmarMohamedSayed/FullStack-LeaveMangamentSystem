import React from "react";
import { data } from "../data";
import UserStatusPinCard from "./UserStatusPinCard";
const StatusofLeave = () => {
  
  return (
    <>
      <div
        className="card ctm-border-radius shadow-sm"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="card-header">
          <h4 className="card-title mb-0 padding">Today Leaves</h4>
        </div>
        <div className="card-body ">
          <div className="employee-office-table">
            <div className="table-responsive">
              <table className="table custom-table mb-0 table-hover">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Notes</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.leavestutas.map((employee) => (
                    <UserStatusPinCard
                      _id={employee._id}
                      name={employee.preferredname}
                      image={employee.image}
                      leavetype={employee.leavetype}
                      from={employee.from}
                      to={employee.to}
                      note={employee.note}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusofLeave;
