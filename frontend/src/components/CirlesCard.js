import React from "react";

const CirlesCard = (props) => {
  const { _id, name, image } = props;
  return (
    <a key={_id} href="/employees">
      <span
        className="avatar"
        data-toggle="tooltip"
        data-placement="top"
        title=""
        data-original-title={name}
      >
        <img alt={name} src={image} className="img-fluid" />
      </span>
    </a>
  );
};

export default CirlesCard;
