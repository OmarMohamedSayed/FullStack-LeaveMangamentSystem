import React from "react";
import DiscCard from "../components/DiscCard";
import UserCard from "../components/UserCard";
import { data } from "../data";
import axios from "axios";

class Main extends React.Component {
  //

  state = {
    persons: [],
  };

  componentDidMount() {
    const id = window.name;
    axios.get(`http://127.0.0.1:5000/${id}`).then((res) => {
      const persons = res.data.userinfo;
      this.setState({ persons });
    });
    
  }
  render() {
    return (
      <>
        <div className="page-wrapper" style={{ transform: "none" }}>
          <div className="container-fluid" style={{ transform: "none" }}>
            {this.state.persons.map((person) => (
              <div className="row" style={{ transform: "none" }}>
                <div
                  className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"
                  style={{
                    position: "relative",
                    overflow: "visible",
                    boxSizing: "border-box",
                    minHeight: "1px",
                  }}
                >
                  <div
                    className="theiaStickySidebar"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "1px",
                      position: "static",
                      transform: "none",
                    }}
                  >
                    <aside className="sidebar sidebar-user">
                      <DiscCard name={"Home"} value={"Profile"} />
                      <UserCard
                        names={person.preferredname}
                        image={person.image}
                        email={person.email}
                        joptitle={person.joptitle}
                        category={person.category}
                      />
                    </aside>
                  </div>
                </div>

                <div className="col-xl-9 col-lg-8  col-md-12">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div
                        className="card flex-fill ctm-border-radius shadow-sm"
                        style={{ margin: "2rem 1rem 2rem 1rem" }}
                      >
                        <div className="card-header">
                          <h2
                            className="card-title mb-0"
                            style={{ padding: "1rem" }}
                          >
                            Basic Information
                          </h2>
                        </div>
                        <div
                          className="card-body text-center"
                          style={{ paddingBottom: "6rem" }}
                        >
                          <p className="card-text mb-3">
                            <span className="text-perp">PreferredName :</span>
                            <b> {person.preferredname}</b>
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">FirstName : </span>
                            {person.preferredname}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">LastName : </span>
                            {person.lastname}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">Nationality : </span>
                            {person.nationality}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">DateOfBirth : </span>
                            {person.dateofbirth}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">Gender : </span>
                            {person.gender}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">BloodGroup : </span>
                            {person.bloodgroup}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 d-flex"
                      style={{ margin: "2rem 0rem" }}
                    >
                      <div className="card flex-fill  rounded shadow-sm">
                        <div className="card-header">
                          <h2
                            className="card-title mb-0"
                            style={{ padding: "1rem" }}
                          >
                            Contact
                          </h2>
                        </div>
                        <div className="card-body text-center">
                          <p className="card-text mb-3">
                            <span className="text-perp">PhoneNumber : </span>
                            {person.phonenumber}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">Email : </span>
                            {person.email}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">
                              SecondaryNumber :{" "}
                            </span>
                            {person.secondarynumber}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">WebSite : </span>
                            {person.website}
                          </p>
                          <p className="card-text mb-3">
                            <span className="text-perp">Linkedin : </span>
                            {person.linkedin}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div
                        className="col-xl-12 col-lg-6 col-md-6 d-flex"
                        style={{ margin: "2rem 0rem 2rem 0rem" }}
                      >
                        <div className="card ctm-border-radius shadow-sm flex-fill">
                          <div className="card-header">
                            <h2
                              className="card-title mb-0"
                              style={{ padding: "1rem" }}
                            >
                              Dates
                            </h2>
                          </div>
                          <div className="card-body text-center">
                            <p className="card-text mb-3">
                              <span className="text-primary">StartDate : </span>
                              {data.payment.startdate}
                            </p>
                            <p className="card-text mb-3">
                              <span className="text-primary">
                                VisaExpiryDate :
                              </span>
                              {data.payment.visaexpirydate}
                            </p>
                            <a
                              href="javascript:void(0)"
                              className="btn btn-theme ctm-border-radius text-white btn-sm"
                              data-toggle="modal"
                              data-target="#edit_Dates"
                            >
                              <i
                                className="fa fa-pencil"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Main;
