import React from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { BsHandThumbsUp } from "react-icons/bs";
import { PiScrollFill } from "react-icons/pi";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { RiSpeakLine } from "react-icons/ri";
import placementFtRailData from "./placementFtRailData";

const Placement = () => {
  return (
    <ContentWrapper>
      <div className="plaWContainer">
        <div className="plaWheadings">
          <div className="plaWColoredHeading">PLACEMENT WORRIES ?</div>
          <div className="plaWBigHeading">
            Our Dedicated Placement Team is committed to get you the{" "}
          </div>
          <div className="plaWFt">
            <div className="FT">
              <div>
                <BsHandThumbsUp />
              </div>
              <span>Exclusive access to our partner companies</span>
            </div>
            <div className="FT">
              <div>
                <PiScrollFill />
              </div>
              <span>1v1 experts sessions</span>
            </div>
            <div className="FT">
              <div>
                <FaPeopleCarryBox />
              </div>
              <span>Resume, Linkedin, Portfolio building</span>
            </div>
            <div className="FT">
              <div>
                <RiSpeakLine />
              </div>
              <span>Soft Skills, HR Interview & Aptitude Training</span>
            </div>
          </div>
        </div>
        <div className="movingAd">
          <div className="movingContainer">
            <div className="cardSlid">
              {placementFtRailData.map((item, i) => (
                <span className="card" key={i}>
                  <div
                    className="colorHalfCir"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                  <img src={item.img} alt="" />
                  <span style={{ color: `${item.color2}` }}>
                    {item.colorText}
                  </span>
                  <div>{item.text}</div>
                </span>
              ))}
            </div>
            <div className="cardSlid">
              {placementFtRailData.map((item, i) => (
                <span className="card" key={i}>
                  <div
                    className="colorHalfCir"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                  <img src={item.img} alt="" />
                  <span style={{ color: `${item.color2}` }}>
                    {item.colorText}
                  </span>
                  <div>{item.text}</div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Placement;
