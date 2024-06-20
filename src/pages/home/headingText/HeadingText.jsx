import React from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import greenLogo from "../../../../src/assets/sheild_green_check.eb639f41.svg";
import redLogo from "../../../../src/assets/medel.26c4481e.svg";
import orangeLogo from "../../../../src/assets/people_orange.3c733ba9.svg";
import blueLogo from "../../../../src/assets/doler_round_blue.a2c7bc89.svg";
import linkedinLogo from "../../../../src/assets/linkedin.9e1488bd.svg";
import { useNavigate } from "react-router-dom";

const HeadingText = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="heading">
        <div className="mainHeading">
          <span>
          Ignit Your Tech Career Today: Learn, Grow, and Get Placed
          </span>
        </div>
        <div className="subHeading">
          Full Stack Development | Cyber Security | Data Science & AI
        </div>
        <div className="punchLine">
          <div className="achivBox">
            <img src={greenLogo} alt="image" />
            <div className="achivText">
              <div className="text1">1500+</div>
              <div className="text2">Student Placed</div>
            </div>
          </div>
          <div className="achivBox">
            <img src={redLogo} alt="image" />
            <div className="achivText">
              <div className="text1">41 LPA</div>
              <div className="text2">Highest Salary</div>
            </div>
          </div>
          <div className="achivBox">
            <img src={orangeLogo} alt="image" />
            <div className="achivText">
              <div className="text1">450+</div>
              <div className="text2">Partner Companies</div>
            </div>
          </div>
          <div className="achivBox">
            <img src={blueLogo} alt="image" />
            <div className="achivText">
              <div className="text1">7.2 LPA</div>
              <div className="text2">Average Salary</div>
            </div>
          </div>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/pulse/linkedin-top-startups-2023-20-indian-companies-rise-eo4oe/"
            target="_blank"
          >
            <button className="linkDinBtn">
              <img src={linkedinLogo} alt="" />
              <span>LinkedIn Top 20 Startups</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeadingText;
