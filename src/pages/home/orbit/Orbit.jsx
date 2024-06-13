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

        <a href="https://authentication.acciojob.com/sign-up" target="_blank">
          <div className="applyBtn">
            <CommonButton
              text={"Apply Now"}
              paddingHV={"10px 115px"}
              fontSize={"20px"}
              fontWight={"600"}
            />
          </div>
        </a>
        <div className="applyText">
          By clicking ‘Apply Now For Free’, you agree to our
        </div>
        <a href="https://terms.acciojob.com/" target="_blank">
          <div className="termText">Terms & Conditions</div>
        </a>

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
