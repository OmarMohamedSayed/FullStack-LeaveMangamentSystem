import React from "react";

const UserCard = (props) => {
  const { names, image, email, joptitle, category } = props;


  return (
    <>
      <div
        className="user-card shadow-sm bg-white p-4 text-center rounded card"
        style={{ margin: "2rem" }}
      >
        <div className="user-info">
          <div className="user-avatar mb-4">
            <img
              src={image}
              alt={names}
              className="img-fluid rounded-circle"
              width="100"
            />
          </div>
          <div className="user-details">
            <h4>
              <b>Welcome {names}</b>
            </h4>
            <h4 className="ctm-text-sm">{email}</h4>
            <h4 className="ctm-text-sm">{joptitle}</h4>
            <h4 className="ctm-text-sm">{category}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
