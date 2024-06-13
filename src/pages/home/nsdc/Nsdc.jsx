import React from "react";
import "./styles.scss";
import badge from "../../../assets/badge.d9bd2c7e.svg";
import cir from "../../../assets/all.bd93e7f1.svg";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Nsdc = () => {
  return (
    <ContentWrapper>
      <div className="nsdcWrap">
        <div className="nsdc-top">
          <div className="badgeBullet">
            <img src={badge} alt="" />
            <span>top quality curriculum</span>
          </div>
          <div className="nsdcBigHeading">
            National Skill Development Corporation <span>(NSDC)</span>{" "}
            Accredited Certificate
          </div>
          <div className="nsdcDes">
            AccioJob is proud to announce a strategic partnership with the
            National Skill Development Corporation (NSDC). Our students will
            receive a certificate recognized Nationally & authenticated via the
            Skill India Portal.
          </div>
        </div>
        <div className="nsdc-bottom">
          <img src={cir} alt="image" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Nsdc;
