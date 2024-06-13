import React, { useState } from "react";
import "./styles.scss";
import coursesData from "./coursesData";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { BsClock } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiGraduationCap, PiSuitcase } from "react-icons/pi";
import {
  MdCheck,
  MdKeyboardArrowUp,
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import CommonButton from "../../../components/button/CommonButton";

const Courses = () => {
  const [showCur, setShowCur] = useState(false);

  const handleShowcur = () => {
    setShowCur(!showCur);
  };

  return (
    <ContentWrapper>
      <div className="smallCoursesHeading">
        <p>GET HANDS-ON EXPERIENCE</p>
      </div>
      <p className="bigCoursesHeading">
        Take a look at our Amazing Curated Courses!
      </p>
      <div className="coursesMainContainer">
        {coursesData.map((item, index) => (
          <div className="coursesMainCard" key={index}>
            <div className="cardUp">
              <img src={item.img1} alt="image" />
              <div
                className="coloredBg"
                style={{
                  backgroundColor: `${item.color1}`,
                  backgroundImage: `linear-gradient(
          to bottom,
          ${item.color1},
          rgba(255, 255, 255, 1)
        )`,
                }}
              >
                <span
                  className="bulletHeading"
                  style={{ backgroundColor: `${item.color2}` }}
                >
                  {item.bulletHeading}
                </span>
                <img src={item.Img2} alt="image" />
                <p>{item.mainHeading}</p>
              </div>
              <div className="info">
                <span
                  className="duration"
                  style={{
                    backgroundColor: `${item.color1}`,
                    color: `${item.color2}`,
                  }}
                >
                  <BsClock /> DURATION: {item.duration}
                </span>
                <span
                  className="seat"
                  style={{
                    backgroundColor: `${item.color1}`,
                    color: `${item.color2}`,
                  }}
                >
                  <FaPeopleGroup />
                  SEAT LEFT: {item.seatsLeft}
                </span>
              </div>
              <div className="cardDes">{item.des}</div>
            </div>
            <div className="cardBottom">
              <div className="curriculum">
                <div className="curHeading" onClick={handleShowcur}>
                  <PiGraduationCap />
                  <span>CURRICULUM</span>
                  {showCur ? (
                    <MdOutlineKeyboardArrowDown className="curArrow" />
                  ) : (
                    <MdKeyboardArrowUp className="curArrow" />
                  )}
                </div>
                <div
                  className="curList"
                  style={{ display: `${showCur ? "block" : "none"}` }}
                >
                  {item.curriculum.map((cur, index) => (
                    <div key={index + 564}>
                      <p className="curItem">
                        <MdCheck style={{ color: "var(--blue)" }} />
                        <span>{cur}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="placement curriculum">
                <div className="plaHeading curHeading">
                  <PiSuitcase />
                  <span>PLACEMENT</span>
                </div>
                <div className="plaList curList">
                  {item.placement.map((pla, index) => (
                    <p className="plaItem curItem" key={index + 987}>
                      <MdCheck style={{ color: "var(--blue)" }} />
                      <span>{pla}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="coursesBtns">
                <CommonButton
                  text={`Brochure`}
                  comp={<MdOutlineFileDownload />}
                  btnColor={"#CFECFE"}
                  textColor={"var(--blue)"}
                  shawodColor={"#9cc4dd"}
                  paddingHV={"12px 35px"}
                />
                <CommonButton
                  text={"Learn More"}
                  comp={<MdOutlineKeyboardArrowRight />}
                  paddingHV={"12px 30px"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Courses;
