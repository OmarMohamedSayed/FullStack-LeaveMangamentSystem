import React from "react";

const PerCard = (props) => {
  const { name, image, jobtitle, email } = props;
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4" style={{ margin: "1rem 0" }}>
        <div className="card widget-profile">
          <div className="card-body">
            <div className="pro-widget-content text-center">
              <div className="profile-info-widget">
                <a href="employment.html" className="booking-doc-img">
                  <img
                    src={image}
                    alt={name}
                    className="img-fluid rounded-circle padding"
                    width="100"
                  />
                </a>
                <div className="profile-det-info">
                  <h4>
                    <a href="employment.html" className="text-primary">
                      {name}
                    </a>
                  </h4>
                  <div>
                    <p className="mb-0">
                      <b>{jobtitle}</b>
                    </p>
                    <p className="mb-0 ctm-text-sm">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerCard;
