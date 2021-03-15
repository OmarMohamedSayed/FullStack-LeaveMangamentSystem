import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouseUser,
  faUsers,
  faSuitcase,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const MeanMenu = () => {
  return (
    <div className="custemmainmenu">
      <div className="custemcontain">
        <div className="custemrow custemedit">
          <div className="padding activated">
            <a href={`/dashboard`}>
              <FontAwesomeIcon icon={faHouseUser} className="custemicon" />
              <span>Dashboard</span>
            </a>
          </div>
          <div className="padding ">
            <a href={`/employees`}>
              <FontAwesomeIcon icon={faUsers} className="custemicon" />
              <span>Employees</span>
            </a>
          </div>
          <div className="padding">
            <a href={`/applyleave`}>
              <FontAwesomeIcon icon={faSuitcase} className="custemicon" />
              <span>Apply Leave</span>
            </a>
          </div>
            <div className="padding">
              <a href="/">
                <FontAwesomeIcon icon={faSignOutAlt} className="custemicon" />
                <span>Logout</span>
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default MeanMenu;
