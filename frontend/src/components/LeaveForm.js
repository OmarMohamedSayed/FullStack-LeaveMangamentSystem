import React from "react";
import axios from "axios"; 

class LeaveForm extends React.Component {

  state = {
    leavetype: "",
    _from: "",
    _to: "",
    note: "",
  };
  
 

  handleChange1 = (event) => {
    this.setState({ leavetype: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ _from: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ _to: event.target.value });
  };
  handleChange4 = (event) => {
    this.setState({ note: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const id = window.name
    const user = {
      leavetype: this.state.leavetype,
      _from: this.state._from,
      _to: this.state._to,
      note: this.state.note,
    };
    axios
      .post(`http://127.0.0.1:5000/pendleavestatus/${id}`,  user )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    window.location.reload(false);
  };

  render() {
    return (
      <>
        
        
        <div className="col-md-12">
          <div
            className="card ctm-border-radius shadow-sm"
            style={{ margin: "2rem 0rem 2rem 0rem" }}
          >
            <div className="card-header">
              <h4 className="card-title mb-0 padding">Apply Leaves</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Leave Type
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control form-control-lg ctm-border-radius"
                        tabindex="-1"
                        aria-hidden="true"
                        onChange={this.handleChange1}
                      >
                        <option>Select Leave</option>
                        <option>Working From Home</option>
                        <option>Sick Leave</option>
                        <option>Parental Leave</option>
                        <option>Annual Leave</option>
                        <option>Normal Leave</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                      <label>From</label>
                      <input
                        type="text"
                        class="form-control form-control-lg datetimepicker"
                        onChange={this.handleChange2}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 leave-col">
                    <div className="form-group">
                      <label>To</label>
                      <input
                        type="text"
                        class="form-control form-control-lg datetimepicker"
                        onChange={this.handleChange3}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group mb-0">
                      <label>Reason</label>
                      <textarea
                        className="form-control ctm-border-radius"
                        rows="4"
                        onChange={this.handleChange4}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center padding">
                  <a
                    href="#"
                    className="btn btn-warning btn-lg text-white ctm-border-radius margin-top margin-right"
                    onClick={this.handleSubmit}
                  >
                    Apply
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger btn-lg text-white ctm-border-radius margin-top"
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeaveForm;
