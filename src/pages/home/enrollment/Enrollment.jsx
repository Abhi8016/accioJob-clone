import React, { useState } from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { MdOutlineNextWeek } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import exam from "../../../assets/enrollmentImgs/exam.svg";
import interview from "../../../assets/enrollmentImgs/interview.svg";
import textbook from "../../../assets/enrollmentImgs/textbook.svg";

const Enrollment = () => {
  const [option1IsActive, setOption1IsActive] = useState(true);
  return (
    <ContentWrapper>
      <div className="enrollColoredHeading">
        <span>YOUR PATH FORWORD</span>
      </div>
      <div className="enrollHeading">Our Enrollment Methods</div>
      <div className="enrollComp">
        <div className="switchTabs">
          <div
            className={`${option1IsActive ? "option1" : ""}`}
            onClick={() => {
              setOption1IsActive(true);
            }}
          >
            <span>Java & MERN Full Stack</span>
          </div>
          <div
            className={`${!option1IsActive ? "option1" : ""}`}
            onClick={() => {
              setOption1IsActive(false);
            }}
          >
            <span>Data Science & AI</span>
          </div>
        </div>
        <div className="enrollMentContent">
          {option1IsActive ? (
            <>
              <div className="EnComp">
                <span>
                  <MdOutlineNextWeek />
                </span>
                <div className="enrollCompHeading">
                  <p>Pay after Placement</p>
                </div>
                <div className="enrollCompDes">
                  Top performers in our PAP selection process pay us only after
                  we get them a Job!
                </div>
                <div className="ins">Selection process for PAP</div>
                <div className="steps">
                  <div className="step">
                    <span>
                      <img src={textbook} alt="image" />
                    </span>
                    <div className="step_text">
                      <div>Solve Assignments</div>
                      <p>
                        You'll need to solve assignments & meet a certain score
                        to be eligible for the coding test.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <span>
                      <img src={exam} alt="image" />
                    </span>
                    <div className="step_text">
                      <div>Coding Test</div>
                      <p>
                        Take a coding test based on the lectures and assignments
                        you've completed.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <span>
                      <img src={interview} alt="image" />
                    </span>
                    <div className="step_text">
                      <div>Interview</div>
                      <p>
                        A Final short Interview Round, which is your last hurdle
                        in the selection process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="EnComp semi_pap">
                <div className="cost">COST EFFECTIVE</div>
                <span>
                  <PiMoneyFill />
                </span>
                <div className="enrollCompHeading">
                  <p>Semi - Pay after Placement</p>
                </div>
                <div className="enrollCompDes">
                  Pay a minimal Tuition fees in monthly installments & pay the
                  remaining fee after placement only if we get you placed.
                </div>
                <div className="ins">
                  Just follow the steps below & Avail Scholarship
                </div>
                <div className="steps">
                  <div className="step">
                    <span>
                      <img src={exam} alt="image" />
                    </span>
                    <div className="step_text">
                      <div>Give Eligibility Test</div>
                      <p>
                        Clear a short 20-minute test that will determine if
                        you're eligible for our full-stack courses.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <span>
                      <img src={interview} alt="image" />
                    </span>
                    <div className="step_text">
                      <div>Talk to Our Counsellor to Buy Course</div>
                      <p>
                        They'll guide you through our course options & you might
                        get a chance to earn scholarships as well.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="EnComp dataScience">
              <span>
                <PiMoneyFill />
              </span>
              <div className="enrollCompHeading">
                <p>Pay Course Fee</p>
              </div>
              <div className="enrollCompDes">
                100% Placement Assistance with only 12 Months Zero Cost EMI
              </div>
              <div className="ins">Just follow the steps below</div>
              <div className="steps" style={{marginBottom: "100px"}}>
                <div className="step">
                  <span>
                    <img src={exam} alt="image" />
                  </span>
                  <div className="step_text">
                    <div>Give Eligibility Test</div>
                    <p>
                      Clear a short 20-minute test that will determine if you're
                      eligible for our full-stack courses.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span>
                    <img src={interview} alt="image" />
                  </span>
                  <div className="step_text">
                    <div>Talk to Our Counsellor to Buy Course</div>
                    <p>
                      They'll guide you through our course options & you might
                      get a chance to earn scholarships as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Enrollment;
