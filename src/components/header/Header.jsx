import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import acciojobLogo from "../../assets/acciojobLogo.svg";
import accioLogo from "../../assets/accioLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../button/CommonButton";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [show, setShow] = useState("hide");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  const [courseListView, setCourseListView] = useState(false);
  const [moreListView, setMoreListView] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlBtnPosition = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 300 && !mobileView) {
      // console.log("hiiii");
      setShow("show");
    } else if (window.scrollY < 300) {
      setShow("hide");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlBtnPosition);
    return () => {
      window.removeEventListener("scroll", controlBtnPosition);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`navBar ${mobileView ? "mobileView" : ""}`}>
        <ContentWrapper>
          <div className="left">
            <div className="logo">
              <div className="rotate">
                {" "}
                <img src={accioLogo} alt="logo image" />
              </div>
              <img src={acciojobLogo} alt="logo image" />
            </div>
            <div className="leftSide">
              <div className="courseBtn">
                <button
                  className="btn"
                  onClick={() => {
                    setCourseListView(!courseListView);
                    setMoreListView(false);
                  }}
                >
                  <p>
                    Courses{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="menu-btn-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="square"
                        stroke-miterlimit="10"
                        stroke-width="48"
                        d="M112 184l144 144 144-144"
                      ></path>
                    </svg>
                  </p>
                </button>
                <span className="new">New</span>
              </div>
              <div
                className="panel"
                onClick={() => {
                  setMobileView(!mobileView);
                  setCourseListView(false);
                }}
              >
                {mobileView ? <VscChromeClose /> : <SlMenu />}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="bigScreen">
              <p>AccioJob Rivew</p>
              <p>placement highlights</p>
              <p>refer & earn</p>
              <p
                onClick={() => {
                  setMoreListView(!moreListView);
                  setCourseListView(false);
                }}
              >
                More
              </p>
              <CommonButton
                text={"Go To Dashbord"}
                btnColor={"var(--white)"}
                shawodColor={"var(--buttonBlue)"}
                textColor={"var(--blue)"}
                borderColor={"var(--blue)"}
              />
              <div className={show}>
                <CommonButton
                  paddingHV={"12px 40px"}
                  text={"Apply Now"}
                  btnColor={"var(--gradient-2)"}
                  shawodColor={"var(--buttonBlue)"}
                />
              </div>
            </div>
          </div>
        </ContentWrapper>
        {/* <ContentWrapper> */}
        {mobileView && (
          <div className="mobileMenu">
            <div>accioJob review</div>
            <div>placement highlights</div>
            <div>refer & earn</div>
            <div>Events</div>
            <div>Blogs</div>
            <div>Hire form as</div>
            <div className="menuBtn">
              <button className="applyBtn">Apply Now</button>
              <button className="dashBordBtn">Go To Dashbord</button>
            </div>
          </div>
        )}
        {/* </ContentWrapper> */}
        <div className="notice">
          <p>Next batch starts on ⌛️ 7th June. Hurry, limited seats left!</p>
        </div>
      </header>
      {courseListView && (
        <>
          <div
            className="courselist-wraper"
            onClick={() => {
              setCourseListView(false);
            }}
          >
            <div className="courselist-list">
              <div>
                IIT Guwahati Programs<span className="new">New</span>
              </div>
              <div>
                PG Diploma Programs<span className="new">New</span>
              </div>
              <div>
                Classroom Program<span className="new">New</span>
              </div>
              <div
                onClick={() => {
                  navigate("/kjjkkj");
                }}
              >
                MERN Full Stack Development
              </div>
              <div>JAVA Full Stack Development</div>
              <div>Data Science & AI</div>
            </div>
          </div>
        </>
      )}
      {moreListView && (
        <div
          className="morelist"
          onClick={() => {
            setMoreListView(false);
          }}
        >
          <div className="moreItems">
            <div>Events</div>
            <div>Blogs</div>
            <div>Hire From Us</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
