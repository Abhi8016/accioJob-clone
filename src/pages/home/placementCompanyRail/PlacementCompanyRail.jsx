import React from "react";
import "./styles.scss";
import star from "../../../assets/placementCompanyLogos/starbg.svg";
import CommonButton from "../../../components/button/CommonButton";
import rail1 from "./rail1";
import rail2 from "./rail2";
import rail3 from "./rail3";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const PlacementCompanyRail = () => {
  // const dublicateRail1 = [...rail1, ...rail1];
  return (
    <>
      <div className="companyBox">
        <img src={star} alt="image" />
        <div className="firstHalf">
          <p>
            <span>Placements</span> at AccioJob
          </p>
          <div>
            1500+ Alumni are building their dream careers by upskilling with
            AccioJob. Read about them here!
          </div>
          <CommonButton
            text={"See Placement Highlights"}
            paddingHV={"10px 50px"}
            fontSize={"16px"}
          />
        </div>
        <div className="second">
          <div className="secondHalf">
            <div className="logos_slids">
              {rail1.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
            <div className="logos_slids">
              {rail1.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="secondHalf">
            <div
              className="logos_slids"
              style={{ animation: "40s slide2 linear infinite" }}
            >
              {rail2.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
            <div
              className="logos_slids"
              style={{ animation: "40s slide2 linear infinite" }}
            >
              {rail2.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="secondHalf">
            <div className="logos_slids">
              {rail3.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
            <div className="logos_slids">
              {rail3.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={item} alt="image" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementCompanyRail;
