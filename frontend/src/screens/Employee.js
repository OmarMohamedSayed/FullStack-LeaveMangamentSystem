import React from "react";
import DiscCard from "../components/DiscCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data";
import PerCard from "../components/PerCard";
import axios from "axios";
class Employee extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/employees`).then((res) => {
      const employees = res.data.userinfo;
      this.setState({ employees });
    });
  }
  render() {
    return (
      <div className="page-wrapper" style={{ transform: "none" }}>
        <div className="container-fluid" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div
              className="col-xl-3 col-lg-4 col-md-12"
              style={{
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px",
              }}
            >
              <div
                className="theiaStickySidebar"
                //   style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;"
              >
                <aside className="sidebar sidebar-user">
                  <DiscCard name={"Home"} value={"Employees"} />

                  <div
                    className="quicklink-sidebar-menu bg-white card"
                    style={{ margin: "2rem" }}
                  >
                    <div className="card-body" style={{ margin: "2rem" }}>
                      <ul className="list-group padding">
                        <li className="list-group-item text-center activated button-5 padding">
                          <a href="/employees" className="text-white">
                            All
                          </a>
                        </li>
                        <li className="list-group-item text-center button-6 padding">
                          <a className="text-dark" href="employees-team.html">
                            Teams
                          </a>
                        </li>
                        <li className="list-group-item text-center button-6 padding">
                          <a
                            className="text-dark"
                            href="employees-offices.html"
                          >
                            Offices
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8  col-md-12">
              <div className="card shadow-sm " style={{ margin: "2rem" }}>
                <div className="card-body align-center">
                  <h1 className="card-title float-left mb-0 mt-2 padding">
                    7 People
                  </h1>
                  <div className="nav nav-tabs float-right border-0 tab-list-emp padding">
                    <a
                      className="nav-link active border-0 font-23 grid-view"
                      href="employees.html"
                    >
                      <FontAwesomeIcon
                        icon={faThLarge}
                        className="iconwindow"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="ctm-border-radius shadow-sm card"
                style={{ margin: "2rem" }}
              >
                <div className="card-body">
                  <div className="row people-grid-row">
                    {this.state.employees.map((employee) => (
                      <PerCard
                        key={employee.id}
                        name={employee.preferredname}
                        image={employee.image}
                        jobtitle={employee.joptitle}
                        email={employee.email}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
