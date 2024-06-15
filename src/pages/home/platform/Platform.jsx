import React, { useState } from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import platformDataMobView from "./platformDataMobView.jsx";
import platformData from "./platformData.jsx";
import { MdOutlineVoiceChat } from "react-icons/md";
import CommonButton from "../../../components/button/CommonButton.jsx";
import { BiMovie } from "react-icons/bi";
import VideoPopup from "../../../components/videoPopup/VideoPopup.jsx";
import Tabs from "../../../components/tabs/Tabs.jsx";

const Platform = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <>
      <ContentWrapper>
        <div className="platHeading_div">
          <div className="platColoredHeading">ONE-STOP LEARNING PLATFORM</div>
          <div className="platBigHeading">
            Everything you need to crack your
          </div>
          <div className="platDes">
            You will have access to Live Doubt Solving, 1-on-1 Practice
            Interviews, Weekly Contests, Our Placement Portal and More!
          </div>
        </div>
        <div className="platCarWrap">
          {platformDataMobView &&
            platformDataMobView.map((item, index) => (
              <div className="platCard" key={index}>
                <div
                  className="platcard_top"
                  style={{ borderBottom: `4px solid ${item.color}` }}
                >
                  <div
                    className="fadedColor"
                    style={{ background: `${item.color}` }}
                  ></div>
                  <span className="headIcon" style={{ color: `${item.color}` }}>
                    {item.icon}
                  </span>
                  <span className="headText" style={{ color: `${item.color}` }}>
                    {item.tabName}
                  </span>
                </div>
                <div className="platcard_mid">
                  <div>{item.heading}</div>
                  <span>{item.des}</span>
                </div>
                <div className="platcard_bottom">
                  <div className="platcardImg">
                    <img src={item.img} alt="image" />
                  </div>
                  <div
                    className="fadedColor_bottom"
                    style={{ background: `${item.color}` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="platBtn"
          onClick={() => {
            setVideoId("88KH6hMgQpc");
            setShow(true);
          }}
        >
          <CommonButton
            comp={<BiMovie />}
            text={"Portal Demo"}
            fontSize={"16px"}
            fontWight={"600"}
            paddingHV={"10px 30px"}
          />
        </div>
        {/* /////// */}
        <div className="paltwrapBig">
          <Tabs data={platformData} />
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          setVideoId={setVideoId}
          videoId={videoId}
        />
      </ContentWrapper>
    </>
  );
};

export default Platform;
