import React from "react";
import DiscCard from "../components/DiscCard";
import LeaveForm from "../components/LeaveForm";
import DetailsaboutTeam from "../components/DetailsaboutTeam";
import ImgTeam from "../components/ImgTeam";
import StatusofLeave from "../components/StatusofLeave";
import axios from 'axios';
class ApplyLeave extends React.Component {
  state = {
    category: false
  };
  componentDidMount() {
    const id = window.name
    axios.get(`http://127.0.0.1:5000/checkmanager/${id}`).then((res) => {
      const categorys = res.data.ismanger;
      this.setState({category:categorys})
    });
   
  }
  
  render() {
    const ismanager = this.state.category;
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
                    {ismanager ? (
                        <StatusofLeave />
                      ) : (<></>)}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
}
export default ApplyLeave;
