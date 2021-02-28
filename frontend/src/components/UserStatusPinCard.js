import React from "react";

const UserStatusPinCard = (props) => {
  const { _id, name, image, leavetype, to, from, note } = props;
  return (
    <>
      <tr>
        <td key={_id}>
          <a href="/employees" className="avatar">
            <img alt={name} src={image} className="img-fluid" />
          </a>
          <h2>
            <a href="#">{name}</a>
          </h2>
        </td>
        <td>{leavetype}</td>
        <td>{to}</td>
        <td>{from}</td>
        <td>{note}</td>
        <td>
          <a
            href=""
            className="btn btn-outline-warning ctm-border-radius btn-lg"
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
          >
            <span className="lnr lnr-trash"></span> Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default UserStatusPinCard;
