import React from "react";
import "./styles.css";

function Navbar() {
  const Labels = ({
    imgPresent =false,
    label="",
    description="",
  }) => {
    return (
      <div className="profile">
        {" "}
        {imgPresent && <img className="avatar" alt="avatar" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>}
        <div>
          <h5>{label}</h5>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="d-flex navbar">
      <Labels imgPresent={true} label="John Mark Labadia" description="M, 19-02-1993 / 26Y 12M 6D"/>
      <Labels label="MRN: 24/" description="PVR:6565632"/>
      <Labels label="Insurance" description="25-03-2020 14:00"/>
    </div>
  );
}

export default Navbar;
