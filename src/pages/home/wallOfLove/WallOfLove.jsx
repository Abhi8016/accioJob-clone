import React from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import wallOfLoveData from "./wallOfLoveData.js";

const WallOfLove = () => {
  return (
    <ContentWrapper>
      <div className="wallHeadings">
        <div className="wallColoredHeading">Students 💙 AccioJob</div>
        <div className="wallBigHeading">AccioJob Wall Of</div>
        <div className="wallSmallHeading">Our Alumni Say it Best</div>
      </div>
      <div className="studentFeedBackContainer">
        {wallOfLoveData &&
          wallOfLoveData.map((item, i) => (
            <div className="stuFeedBackCard" key={i}>
              <div className="cardHead">
                <div className="img1">
                  <img src={item.img} alt="image" className="img1" />
                  <div className="mid">
                    <div className="stuNameMid">{item.name}</div>
                    <div className="stuPostMid">{item.post}</div>
                  </div>
                </div>
                <a href={item.link} target="_blank">
                  <img src={item.simg} alt="image" className="img2" />
                </a>
              </div>
              <div className="cardMid">
                <div className="stuName">{item.name}</div>
                <div className="stuPost">{item.post}</div>
              </div>
              <div className="stuDes">{item.des}</div>
            </div>
          ))}
      </div>
    </ContentWrapper>
  );
};

export default WallOfLove;
