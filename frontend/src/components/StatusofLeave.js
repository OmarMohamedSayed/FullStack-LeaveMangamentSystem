import React from "react";
//import { data } from "../data";
import axios from 'axios';
import UserStatusPinCard from "./UserStatusPinCard";

class StatusofLeave extends React.Component {
  state = {
    pendleaves: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/pendleavestatus`).then((res) => {
      const pendleaves = res.data.pendstatus;
      this.setState({ pendleaves });
    });
  }
  render() {
  
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
                    { this.state.pendleaves.map((pendleave) => ( 
                      
                      <UserStatusPinCard
                        _id={pendleave.user_id}
                        name={pendleave.preferredname}
                        image={pendleave.image}
                        leavetype={pendleave.leavetype}
                        from={pendleave.from}
                        to={pendleave.to}
                        note={pendleave.note}
                      />  
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}
export default StatusofLeave;
