import React from "react";
import "./styles.scss";
import announcementData from "./announcementData";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const Announcement = () => {
  return (
    <>
      <ContentWrapper>
        <div className="announcement">
          <div className="announcement_heading">
            <p className="colorHeading">ANNOUNCEMENT</p>
            <div className="bigHeading">
              <span>Impactful Certifications And Programs</span>
            </div>
          </div>
          <div className="announcementBox">
            {announcementData.map((item, index) => (
              <div
                className="borderBox"
                key={index}
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className="anouncement_card">
                  <img src={item.mainImg} alt="" className="icon" />
                  <img src={item.fadedImg} alt="" className="fadedIcon" />
                  <div className="details">
                    <div className="goli" style={{backgroundColor: `${item.color}`}}>{item.onOff}</div>
                    <div className="des">{item.heading}</div>
                    <div className="courses">{item.courses}</div>
                  </div>
                  <div className="know_more" style={{display:"flex", alignItems:"center"}}>
                    <p style={{display:"inline"}}>Konw More</p>
                    <svg style={{height:"18px"}}
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Announcement;
