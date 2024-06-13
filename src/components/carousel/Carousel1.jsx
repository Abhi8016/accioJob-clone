import React, { useRef, useState } from "react";
import "./styles.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import VideoPopup from "../videoPopup/VideoPopup";

const Carousel1 = ({ data }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 30)
        : container.scrollLeft + (container.offsetWidth + 30);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // console.log(data);

  return (
    <>
      <ContentWrapper>
        <div className="testimonWrap" ref={carouselContainer}>
          <div className="arrow">
            <span className="arrow1">
              <BsFillArrowLeftCircleFill onClick={() => navigation("left")} />
            </span>
            <span className="arrow2">
              <BsFillArrowRightCircleFill onClick={() => navigation("right")} />
            </span>
          </div>
          {data &&
            data.map((item) => (
              <React.Fragment key={item.id}>
                <div className="testimonsSmall">
                  <div
                    className="t-top"
                    style={{ backgroundColor: `${item.color1}` }}
                  >
                    <p className="testimonHeader">{item.heading}</p>
                    <div className="imgAndHandle">
                      <div className="studentImg">
                        <img
                          src={item.studentImg}
                          alt="image"
                          style={{ border: `1px solid ${item.color2}` }}
                        />
                      </div>
                      <div className="handle">
                        <div>
                          <a
                            href={item.linkedIn}
                            style={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                            </svg>
                          </a>
                        </div>
                        <div
                          onClick={() => {
                            setShow(true);
                            setVideoId(item.videoId);
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            role="img"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t-mid">
                    <div className="block">
                      <span style={{ backgroundColor: `${item.color2}` }}>
                        {" "}
                        {item.block1}
                      </span>
                      <span style={{ backgroundColor: `${item.color2}` }}>
                        {item.block2}
                      </span>
                    </div>
                    <p className="testimonDes">{item.description}</p>
                  </div>
                  <div className="t-bottom">
                    <p className="studentName">{item.studentName}</p>
                    <div className="companyLogo">
                      <img src={item.companyLogo} alt="image" />
                    </div>
                  </div>
                </div>

                <div
                  className="testimonsBig"
                  key={item.id}
                  style={{ backgroundColor: `${item.color1}` }}
                >
                  <div
                    className="left"
                    style={{ backgroundColor: `${item.color1}` }}
                  >
                    <p className="name">{item.studentName}</p>
                    <div className="logo">
                      <img src={item.companyLogo} alt="image" />
                    </div>
                    <div className="social">
                      <div>
                        <a
                          href={item.linkedIn}
                          style={{ textDecoration: "none", color: "white" }}
                          target="_blank"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div
                        onClick={() => {
                          setVideoId(item.videoId);
                          setShow(true);
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="stuImg"
                      style={{ border: `1px solid ${item.color2}` }}
                    >
                      <img src={item.studentImg} alt="" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="header">{item.heading}</div>
                    <div className="block">
                      <div style={{ backgroundColor: `${item.color2}` }}>
                        {item.block1}
                      </div>
                      <div style={{ backgroundColor: `${item.color2}` }}>
                        {item.block2}
                      </div>
                    </div>
                    <div className="des">{item.description}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        setVideoId={setVideoId}
        videoId={videoId}
      />
    </>
  );
};

export default Carousel1;
