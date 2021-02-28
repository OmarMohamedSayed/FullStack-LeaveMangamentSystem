import React from "react";
import DiscCard from "../components/DiscCard";
import LeaveForm from "../components/LeaveForm";
import DetailsaboutTeam from "../components/DetailsaboutTeam";
import ImgTeam from "../components/ImgTeam";
import StatusofLeave from "../components/StatusofLeave";
const ApplyLeave = () => {
  return (
    <>
      <div className="page-wrapper" style={{ transform: "none" }}>
        <div className="container-fluid" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div
              className=" col-xl-3 col-lg-4 col-md-12"
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
                  left: "30px",
                  top: "0px",
                }}
              >
                <aside className="sidebar sidebar-user">
                  <DiscCard name={"Home"} value={"Leave"} />
                  <ImgTeam />
                  {/* <div className="card shadow-sm ctm-border-radius">
                    <div className="card-body">
                      <span
                        className="avatar"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Jenni Sims"
                      >
                        <img
                          src="assets/img/profiles/img-3.jpg"
                          alt="Jenni Sims"
                          className="img-fluid"
                        />
                      </span>
                      <span className="ml-4">
                        Jenni Sims is working from home today.
                      </span>
                    </div>
                  </div> */}
                </aside>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="row">
                <LeaveForm />
                <div className="col-md-12">
                  <DetailsaboutTeam />
                </div>
                <div className="col-md-12">
                  <StatusofLeave />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyLeave;
