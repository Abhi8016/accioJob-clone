import React, { useRef, useState } from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import instructorData from "./instructorData";
import { FaLinkedinIn } from "react-icons/fa";

const Instructors = () => {
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

  return (
    <>
      <ContentWrapper>
        <div className="insTop">
          <div className="insColorHeading">
            <span>mentors & instructors at acciojob</span>
          </div>
          <div className="insBigHeading">
            <span>
              India’s
              <span> Top Instructors </span>
              to help you reach your full potential
            </span>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="insCarouselWrap" ref={carouselContainer}>
          <div className="arrow">
            <span className="arrow1">
              <BsFillArrowLeftCircleFill onClick={() => navigation("left")} />
            </span>
            <span className="arrow2">
              <BsFillArrowRightCircleFill onClick={() => navigation("right")} />
            </span>
          </div>
          {instructorData &&
            instructorData.map((items, index) => (
              <React.Fragment key={index}>
                <div className="insCard">
                  <div
                    className="colorBar"
                    style={{ backgroundColor: `${items.color}` }}
                  ></div>
                  <span className="insImg">
                    <img src={items.insImg} alt="" />
                  </span>

                  <div className="insLinkedIn">
                    <span>
                      <FaLinkedinIn />
                    </span>
                  </div>
                  <div className="insInfo">
                    <div className="insName">{items.name}</div>
                    <div className="insPosition">{items.position}</div>
                    <div className="insDes">{items.des}</div>
                  </div>
                  <div className="insColAndCom">
                    <span>{items.college}</span>
                    <span className="insComImg">
                      <img src={items.company} alt="" />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </ContentWrapper>
    </>
  );
};

export default Instructors;
