import React from "react";
import "./styles.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import faqData from "./faqData";
import Accordion from "../../components/accordian/Accordion";

const HomeFaq = () => {
  return (
    <ContentWrapper>
      <div className="faqHeading">
        <div className="faqColorHeading">HAVE ANY QUESTIONS</div>
        <div className="faqBigHeading">Frequently asked Questions</div>
      </div>
      <div className="homeAccor">
        <Accordion data={faqData} openOthers={false} />
      </div>
    </ContentWrapper>
  );
};

export default HomeFaq;
