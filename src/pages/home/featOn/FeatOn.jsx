import React from "react";
import "./styles.scss";
import featOnData from "./featOnData";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const FeatOn = () => {
  return (
    <ContentWrapper>
      <div className="featHeadings">
        <div className="featOnColoredHeading">ACCIOJOB IN THE NEWS!</div>
        <div className="featBigHeading">We have been featured on</div>
        <div className="featOnLogoContainer">
          <div className="featOnLogoSlides">
            {featOnData.map((item, i) => (
              <span key={i}>
                <img src={item} alt="image" />
              </span>
            ))}
          </div>
          <div className="featOnLogoSlides">
            {featOnData.map((item, i) => (
              
                <img src={item} alt="image" key={i}/>
              
            ))}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default FeatOn;
