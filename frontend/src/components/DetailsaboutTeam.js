import React from "react";
import Datetoday from "./Datetoday";

const DetailsaboutTeam = () => {
  return (
    <div className="card ctm-border-radius shadow-sm">
      <div className="card-header">
        <h4 className="card-title mb-0 padding">Leave Details</h4>
      </div>
      <div className="card-body">
        <div className="employee-office-table">
          <div className="table-responsive">
            <table className="table custom-table mb-0 table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Total Employees</th>
                  <th>First Half</th>
                  <th>Second Half</th>
                  <th>Working From Home</th>
                  <th>Absent</th>
                  <th>Today Aways</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Datetoday />
                  </td>
                  <td>7</td>
                  <td>6</td>
                  <td>6</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsaboutTeam;
