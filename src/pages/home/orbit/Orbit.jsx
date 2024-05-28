import React from "react";
import "./styles.scss";
import accio from "../../../assets/accioLogo.svg";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import CommonButton from "../../../components/button/CommonButton";
const Orbit = () => {
  return (
    <>
      <div className="orbitComponent">
        <p className="headingOrbit">
          Start learning for <span className="colorText">FREE</span>
        </p>
        <p className="subHeadingOrbit">
          Lectures & Assignments curated by Top Tech Professionals
        </p>
        {/* //////////////////////////////////////////////// */}
        <div className="orbitContainer">
          <div className="core">
            <img src={accio} alt="image" />
          </div>
          <div className="react"></div>
          {/* <div className="node"></div> */}
          <div className="js"></div>
          {/* <div className="java"></div> */}
          <div className="python"></div>
        </div>
        {/* //////////////////////////////////////////////// */}
        <div className="applyBtn">
          <CommonButton text={"Apply Now"} paddingHV={"14px 130px"} fontSize={"14px"} fontWight={"600"}/>
        </div>
        <div className="backgroundShadow">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
        </div>
      </div>
    </>
  );
};

export default Orbit;
