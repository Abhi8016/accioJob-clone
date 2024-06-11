import javaImg from "../../../assets/coursesImgs/java.svg";
import javaFadedImg from "../../../assets/coursesImgs/java-full.svg";
import mernImg from "../../../assets/coursesImgs/corporate_fare.svg";
import mernFadedImg from "../../../assets/coursesImgs/corporate_fareFaded.svg";
import analyticsImg from "../../../assets/coursesImgs/analytics.svg";
import analyticsFadedImg from "../../../assets/coursesImgs/analyticsFaded.svg";
import { ImGrin2 } from "react-icons/im";

const coursesData = [
  {
    bulletHeading: "SOFTWARE",
    mainHeading: "Java Full-Stack Development Track",
    duration: "8 MONTHS",
    seatsLeft: "55",
    des: "Master DSA, Problem Solving, Full Stack and crack top Software Development jobs",
    curriculum: [
      "Data Structures and Algorithms",
      "Frontend Development with HTML, CSS, JS",
      "Backend Development with Spring Framework",
      "Internship / Capstone Project",
      "Mock Interviews",
      "Mentorship Sessions",
    ],
    placement: ["Pay after Placement Option", "Dedicated Learning Coach"],
    img1: javaFadedImg,
    Img2: javaImg,
    color1: "#EFEFFE",
    color2: "#955FF7",
  },
  {
    bulletHeading: "SOFTWARE",
    mainHeading: "MERN Full-Stack Development Track",
    duration: "8 MONTHS",
    seatsLeft: "70",
    des: "Deep Dive into JavaScript, its MERN Frameworks to become a Full Stack Developer",
    curriculum: [
      "Aptitude & DSA in JavaScript",
      "Frontend Development with React.js, Redux",
      "Backend Development with Node.js, Express.js",
      "Internship / Capstone Project",
      "Mock Interviews",
      "Mentorship Sessions",
    ],
    placement: ["Pay after Placement Option", "Dedicated Learning Coach"],
    img1: mernImg,
    Img2: mernFadedImg,
    color1: "#E2EFEA",
    color2: "#60AE9E",
  },
  {
    bulletHeading: "ANALYTICS",
    mainHeading: "Data Science & AI Track",
    duration: "7 MONTHS",
    seatsLeft: "30",
    des: "Master data tools, hone problem solving skills and break into the Data Science & AI Industry",
    curriculum: [
      "Excel + SQL + Power BI",
      "Python + Machine Learning + AI",
      "Problem Solving with Case Studies, Guesstimates",
      "Capstone Projects",
      "Mock Interviews",
      "Mentorship Sessions",
    ],
    placement: ["100% Placement Assistance", "Dedicated Learning Coach"],
    img1: analyticsImg,
    Img2: analyticsFadedImg,
    color1: "#FEEBE7",
    color2: "#F96341",
  },
];

export default coursesData;
