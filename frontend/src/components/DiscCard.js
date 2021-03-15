import React from "react";

const DiscCard = (props) => {
  const { name, value } = props;
  return (
    <>
      <div className="card rounded shadow-sm" style={{ margin: "2rem" }}>
        <div className="card-body py-4">
          <div className="row">
            <div className="col-md-12 mr-auto text-center">
              <h1 className="text-dark">{name}</h1>
              <h2 className="text-dark">{value}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscCard;
