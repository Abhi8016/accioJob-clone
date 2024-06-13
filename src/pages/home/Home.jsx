import React from "react";
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
const Home = () => {
  return (
    <div className="home">
      <ContentWrapper>
        <div className="heroSection">
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
        <PlacementCompanyRail />
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
    </div>
  );
};

export default Home;
