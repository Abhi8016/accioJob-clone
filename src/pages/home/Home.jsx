import React from "react";
import "./styles.scss";
import CommonButton from "../../components/button/CommonButton";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Orbit from "./orbit/Orbit";
import HeadingText from "./headingText/HeadingText";

import testimonials from "../../dataUtils/testimonials";
import Carousel1 from "../../components/carousel/Carousel1";
import PlacementCompanyRail from "./placementCompanyRail/PlacementCompanyRail";
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
    </div>
  );
};

export default Home;
