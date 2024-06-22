import React from "react";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import accioLogo from "../../assets/footerImgs/logo.svg";
import faceBook from "../../assets/footerImgs/faceBook.svg";
import instagram from "../../assets/footerImgs/Instagram_icon.svg";
import youTube from "../../assets/footerImgs/Youtube_icon.svg";
import linkedin from "../../assets/footerImgs/LinkedIn_icon.svg";
import whatsApp from "../../assets/footerImgs/WhatsApp_icon.svg";
import { FaLocationArrow } from "react-icons/fa6";
import { RiMailAddFill, RiDownload2Line } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import ycombinator from "../../assets/back-img.svg";

const Footer = () => {
  return (
    <ContentWrapper>
      <footer className="footer">
        <div className="logosandDes">
          <div className="footerLogos">
            <div>
              <img src={accioLogo} alt="Acciologo" />
            </div>
            <span>
              <img src={instagram} alt="logo" />
              <img src={linkedin} alt="logo" />
              <img src={whatsApp} alt="logo" />
              <img src={youTube} alt="logo" />
              <img src={faceBook} alt="logo" />
            </span>
          </div>
          <div className="footerDes">
            <span>
              At AccioJob we believe in propelling careers. An upskilling
              platform cofounded by IIT Delhi Alumni we have designed industry
              first courses in 3 most in-demand categories, Full Stack
              Development, Data Analytics and Science and Cybersecurity. The
              learners that we have mentored and coached have gone on to build
              meaningful and rewarding careers at leading tech organisations
              such as Amazon, Walmart and Lowe's among others. Join us in our
              mission to democratize learning and future proof your career.
            </span>
          </div>
        </div>
        <div className="allCourses">
          <div className="footerCourses">
            <div>PG DIPLOMA PROGRAMS</div>
            <span>Full Stack Development - Online</span>
            <span>Full Stack Development - Offline</span>
            <span>Data Science & AI</span>
          </div>
          <div className="footerCourses">
            <div>IIT GUWAHATI PROGRAMS</div>
            <span>Cyber Security</span>
            <span>Full Stack Development - Online</span>
            <span>Full Stack Development - Offline</span>
            <span>Data Science & AI</span>
          </div>
          <div className="footerCourses">
            <div>CERTIFIED COURSES</div>
            <span>Full Stack Development - Online</span>
            <span>Full Stack Development - Offline</span>
            <span>Data Science & AI</span>
          </div>
        </div>
        <div className="FooterLocations allCourses">
          <div className="footerCourses">
            <div>NOIDA OFFICE & OFFLINE CENTRE</div>
            <span>2nd Floor, D69, Block-D, Sector 2, Noida, Uttar Pradesh</span>
            <button>
              Get direction <FaLocationArrow />
            </button>
          </div>
          <div className="footerCourses">
            <div>HYDERABAD OFFICE</div>
            <span>
              Unispace - Modern Profound Tech Park, 3rd Floor, Survey No 3,
              Kondapur, Hyderabad, Telangana
            </span>
            <button>
              Get direction <FaLocationArrow />
            </button>
          </div>
          <div className="footerCourses">
            <div>GURUGRAM OFFICE</div>
            <span>3rd floor, Plot 149, Sector 44, Gurugram, Haryana</span>
            <button>
              Get direction <FaLocationArrow />
            </button>
          </div>
        </div>
        <div className="contactUs allCourses">
          <div className="footerCourses">
            <div>CONTACT US</div>
            <span>
              <RiMailAddFill /> contactus@acciojob.com
            </span>
            <span>
              <BsFillTelephoneFill /> +91 8595563221
            </span>
          </div>
          <div className="footerCourses">
            <div>COMPANY</div>
            <span>Become A Mentor</span>
            <span>Blog</span>
            <span>Careers</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cancellation/Refund Policy</span>
          </div>
          <div className="footerCourses">
            <div className="footerBtn">
              <button className="Dbtn">
                {" "}
                <RiDownload2Line />
                Download Brochure
              </button>
              <button className="Rbtn">
                {" "}
                <BsFillTelephoneFill />
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyRight">
        <div>© Copyright 2024, All Rights Reserved</div>
        <span>
          Backed by <img src={ycombinator} alt="logo" />
        </span>
      </div>
    </ContentWrapper>
  );
};

export default Footer;
