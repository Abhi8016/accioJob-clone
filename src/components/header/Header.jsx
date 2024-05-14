import React from "react";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import acciojobLogo from "../../assets/acciojobLogo.svg";
import accioLogo from "../../assets/accioLogo.svg";
import { useNavigate } from "react-router-dom";
import CommonButton from "../button/CommonButton";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={`header`}>
      <ContentWrapper>
        <div className="mainNavBar">
          <div className="left">
            <div className="logo" onClick={() => navigate("/")}>
              <img src={accioLogo} alt="Logo Image" className="rotetingLogo" />
              <img src={acciojobLogo} alt="Logo Image" className="tiltLogo" />
            </div>
            <span>
              <CommonButton text={"Courses"} width={"150px"} height={"8px"} />
            </span>
          </div>
          <div className="right">
            <CommonButton text={"Courses"} width={"150px"} height={"8px"} />
            <CommonButton text={"Courses"} width={"150px"} height={"8px"} />
            <CommonButton text={"Courses"} width={"150px"} height={"8px"} />
            <CommonButton text={"Courses"} width={"150px"} height={"8px"} />
          </div>
        </div>
      </ContentWrapper>
      <div className="notice">
        <div>Next batch starts on ⌛️ 7th June. Hurry, limited seats left!</div>
      </div>
    </header>
  );
};

export default Header;
