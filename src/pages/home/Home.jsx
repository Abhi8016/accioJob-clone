import React, { useEffect } from "react";
import "./styles.scss";
import CommonButton from "../../components/button/CommonButton";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Orbit from "./orbit/Orbit";
import HeadingText from "./headingText/HeadingText";

import testimonials from "../../dataUtils/testimonials";
import Carousel1 from "../../components/carousel/Carousel1";
import PlacementCompanyRail from "./placementCompanyRail/PlacementCompanyRail";
import Announcement from "./announcement/Announcement";
import Courses from "./courses/Courses";
import Enrollment from "./enrollment/Enrollment";
import Instructors from "./instructors/Instructors";
import Nsdc from "./nsdc/Nsdc";
import Platform from "./platform/Platform";
import perpuleArrow from "../../assets/purple_arraow.e16eb7db.svg";
import Placement from "./placement/Placement";
import WallOfLove from "./wallOfLove/WallOfLove";
import FeatOn from "./featOn/FeatOn";
import HomeFaq from "../homeFaq/HomeFaq";
import Footer from "../../components/footer/Footer";
import whatsApp from "../../assets/footerImgs/WhatsApp_icon.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import TypeWriter from "../../components/typeWriter/TypeWriter";
import Modal from "../../components/modal/Modal";

const Home = () => {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState("hide");

  const [modalOpen, setModalopen] = useState(true);
  const [timer, setTimer] = useState(25);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const close = () => setModalopen(false);
  const open = () => setModalopen(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setModalopen(false);
    }, 25000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [modalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlBtnPosition = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 150) {
      // console.log("hiiii");
      setShow("show");
    } else if (window.scrollY < 150) {
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
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          title={"Important"}
          text1={`Please note that this is a clone of the original Acciojob webpage, some of the links might not work. For authentic information, please visit Acciojob.com.`}
          text2={`You can click anywhere outside this window to close it, or it will automatically close after ${timer} seconds.`}
        />
      )}
      {!modalOpen && (
        <>
          <div className="home">
            <ContentWrapper>
              <div className="heroSection">
                <div className="purpleArrow">
                  <img src={perpuleArrow} alt="image" />
                </div>
                <HeadingText />
                <Orbit />
              </div>
            </ContentWrapper>
            <ContentWrapper>
              <div className="tesimonSection">
                <div>
                  <span className="colorHeading">STUDENT TESTIMONIALS</span>
                </div>
                <div className="bigHeading">
                  Don’t just take our word for it, Go through AccioJob's{" "}
                  <span className="colormiddleText">Student Reviews</span>
                </div>
              </div>
            </ContentWrapper>
            <Carousel1 data={testimonials} />
            <ContentWrapper>
              <div className="placementRailHeading">
                <span>OVER 450+ HIRING PARTNERS</span>
              </div>
              <TypeWriter
                heading={"Top Startups & MNCs Hire"}
                texts={[
                  "Java Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "Data Analyst",
                  "Backend Software Engineer",
                  "Frontend Software Engineer",
                  "Business Analyst",
                  "Full Stack Developer",
                  "Software Enginee",
                  "Data Engineer",
                  "Web Developer",
                  "Software Dev Engineer",
                  "Reactjs Developer",
                  "NodeJs Developer",
                  "Application Developer",
                  "Financial Analyst",
                  "Cloud Developer",
                  "Product Dev Engineer",
                  "Marketing Analyst",
                  "ML Engineer",
                  "DevOps Engineer",
                  "Python Developer",
                  "Data Scientist",
                ]}
              />
              <PlacementCompanyRail /> {/* placementRail */}
            </ContentWrapper>
            <div className="announecement">
              <Announcement />
            </div>
            <div className="courses_cards">
              <Courses />
            </div>
            <div className="enrollment">
              <Enrollment />
            </div>
            <div className="instructors">
              <Instructors />
            </div>
            <div className="nsdc">
              <Nsdc />
            </div>
            <div className="platform">
              <Platform />
            </div>
            <div className="placementW">
              <Placement />
            </div>
            <div className="wallOfLove">
              <WallOfLove />
            </div>
            <div className="featOn">
              <FeatOn />
            </div>
            <div className="homeAccordian">
              <HomeFaq />
            </div>
            <div className="homeFooter">
              <Footer />
            </div>
            <div className={`whatsappForphone ${show}`}>
              <a
                href="https://api.whatsapp.com/send?phone=918595563221&text=Hey%20Team%2c%20I%27m%20interested%20in%20registering%20for%20your%20course.%0a%0aThanks&source=&data="
                target="_blank"
              >
                <img src={whatsApp} alt="logo" />
              </a>

              <div>
                <a
                  href="https://authentication.acciojob.com/sign-up"
                  target="_blank"
                >
                  <CommonButton
                    text={"Apply Now >"}
                    paddingHV={"10px 85px"}
                    btnColor={"var(--gradient-2)"}
                    fontSize={"17.5px"}
                  />
                </a>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=918595563221&text=Hey%20Team%2c%20I%27m%20interested%20in%20registering%20for%20your%20course.%0a%0aThanks&source=&data="
              target="_blank"
              className="fixedWhatsapp"
            >
              <img src={whatsApp} alt="logo" />
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
