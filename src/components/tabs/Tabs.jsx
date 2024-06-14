import React, { useState } from "react";
import "./styles.scss";
import VideoPopup from "../videoPopup/VideoPopup";
const Tabs = ({ data }) => {
  const [activeTab, setACtiveTab] = useState(0);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  console.log(data);
  return (
    <>
      <div className="tabsContainer">
        <div className="tabHeaders">
          {data &&
            data.map((item, i) => (
              <div
                className="headerItems"
                key={i}
                onClick={() => setACtiveTab(i)}
                style={{
                  borderBottom: `5px solid ${
                    activeTab === i ? item.color : "var(--white)"
                  }`,
                }}
              >
                <div
                  style={{
                    color: `${activeTab === i ? item.color : ""}`,
                    fontSize: `${activeTab === i ? "15.5px" : ""}`,
                  }}
                >
                  {item.icon}
                  {item.tabName}
                </div>
              </div>
            ))}
        </div>
        {data &&
          data.map((item, i) => (
            <div key={i}>
              {activeTab === i ? (
                <div className="tabContent">
                  <div
                    className="colorFaded"
                    style={{ background: `${item.color}` }}
                  ></div>
                  <div className="tabContentLeft">
                    <h4 style={{ color: `${item.color}` }}>{item.tabName}</h4>
                    <p>{item.heading}</p>
                    <div>{item.des}</div>
                  </div>
                  <div className="tabContentRight">
                    <img
                      src={item.img}
                      alt="image"
                      onClick={() => {
                        setVideoId("88KH6hMgQpc");
                        setShow(true);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="tabContentHide"></div>
              )}
            </div>
          ))}
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        setVideoId={setVideoId}
        videoId={videoId}
      />
    </>
  );
};

export default Tabs;
