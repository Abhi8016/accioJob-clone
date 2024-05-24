import React from "react";
import "./styles.scss";
import CommonButton from "../../components/button/CommonButton";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Orbit from "./orbit/Orbit";
import HeadingText from "./headingText/HeadingText";
const Home = () => {
  return (
    <div className="home">
      <ContentWrapper>
        <div className="heroSection">
          <HeadingText />
          <Orbit />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Home;
