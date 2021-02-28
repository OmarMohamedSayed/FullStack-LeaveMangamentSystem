import React, { Component } from "react";

class Datetoday extends Component {
  constructor(props) {
    super(props);
    let newDate = new Date();
    let todaydate = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    todaydate = `${year}${"/"}${
      month < 10 ? `0${month}` : `${month}`
    }${"/"}${todaydate}`;
    this.state = {
      currentDateTime: todaydate,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.currentDateTime}</p>
      </div>
    );
  }
}
export default Datetoday;
