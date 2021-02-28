import React from "react";

class Datetimepic extends React.Component {
  
  constructor(props) {
    super(props);
    // let newDate = new Date();
    // let todaydate = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    // let hour = newDate.getHours();
    // let minute = newDate.getMinutes();

    // todaydate = `${
    //   month < 10 ? `0${month}` : `${month}`
    // }${"-"}${todaydate}${"-"}${year}${"T"}${hour}${":"}${minute}`;
    this.state = {
      date: "",
    };
  }

  render() {
    return (
      <input
        type="datetime-local"
        ref={(date) => {
          this.dateRef = date;
        }}
        value={this.state.date}
        onChange={this._onDateChange.bind(this)}
        className="form-control form-control-lg ctm-border-radius"
      />
    );
  }

  _onDateChange(e) {
    let state = this.state;
    state["date"] = e.target.value;
    // Or (you can use below method to access component in another method)
    // state["date"] = this.dateRef.value;
    this.setState(state);
  }
}

export default Datetimepic;
