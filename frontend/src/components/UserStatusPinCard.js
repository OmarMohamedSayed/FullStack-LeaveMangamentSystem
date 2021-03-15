import React from "react";
import axios from 'axios';

class UserStatusPinCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props._id,
      name: props.name,
      image:props.image,
      leavetype:props.leavetype,
      from : props.from,
      to:props.to,
      note:props.note
    };
  }
  handelOnclickdelete = (event) => {
    event.preventDefault();
    axios
      .delete(`http://127.0.0.1:5000/pendleavestatus/${this.state._id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    window.location.reload(false);
  };
  handelOnclickapproved = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/approveleavestatus/${this.state._id}`,{"status":"Approved"})
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    window.location.reload(false);
  }
  render() {
    return (
      <>
        <tr>
          <td key={this.state._id}>
            <a href="/employees" className="avatar">
              <img alt={this.state.name} src={this.state.image} className="img-fluid" />
            </a>
            <h2>
              <a href="#">{this.state.name}</a>
            </h2>
          </td>
          <td>{this.state.leavetype}</td>
          <td>{this.state.from}</td>
          <td>{this.state.to}</td>
          <td>{this.state.note}</td>
          <td>
            <a
              href=""
              className="btn btn-outline-warning ctm-border-radius btn-lg"
              onClick={this.handelOnclickapproved}
            >
              Approved
            </a>
          </td>
          <td className=" text-danger">
            <a
              href=""
              className="btn btn-lg btn-outline-danger"
              data-toggle="modal"
              data-target="#delete"
              onClick={this.handelOnclickdelete}
            >
              <span className="lnr lnr-trash"></span> Delete
            </a>
          </td>
        </tr>
      </>
    );
  };
}
export default UserStatusPinCard;
