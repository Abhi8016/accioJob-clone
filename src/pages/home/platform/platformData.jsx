import liveClases from "../../../assets/platformImgs/classes.187ee14b.svg";
import doubtSolving from "../../../assets/platformImgs/DoubtSolving.028941fc.png";
import practiceInterview from "../../../assets/platformImgs/oneVone.2785975f.png";
import placement from "../../../assets/platformImgs/placement.c704a376.svg";
import contest from "../../../assets/platformImgs/contest.0aac4ce9.svg";
import softSkill from "../../../assets/platformImgs/softskill.2805dd52.svg";
import thumbnil from "../../../assets/platformImgs/Thumbnail.cd4d21e7.png";
//
import { MdOutlineVoiceChat } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { LuScrollText } from "react-icons/lu";
import { PiSuitcase, PiTrophyBold } from "react-icons/pi";
import { RiSpeakLine } from "react-icons/ri";
import { GiPortal } from "react-icons/gi";

const platformData = [
  {
    tabName: "Our Portal",
    heading:
      "Experience AccioJob's Learning Portal through a Quick Video Tour.",
    des: "Leaderboard, Job Sincerity, Modules, Gym, Live Doubts, Contests, Mentorship Sessions, Job Portal, Notes, Open Editor, Projects & many more such features for you to check out!",
    img: thumbnil,
    color: "#f2d811",
    icon: <GiPortal />,
  },
  {
    tabName: "Daily Live Classes",
    heading:
      "Maximize your learning potential with our expert-led live classes.",
    des: "We've got you covered, our instructors are available every day to help you understand every topic, and if you can't attend a class, you can watch the recording later.",
    img: liveClases,
    color: "#F88341",
    icon: <MdOutlineVoiceChat />,
  },
  {
    tabName: "Doubt Solving",
    heading:
      "Get immediate answers to your coding queries with our Live Doubt Assistance.",
    des: "Our Mentors are available on Chat and on Video as well to ensure that you don't get stuck anywhere and can manage your time efficiently.",
    img: doubtSolving,
    color: "#4498FF",
    icon: <GrChatOption />,
  },
  {
    tabName: "Practice Interviews",
    heading:
      "Get Placement ready by giving 1-on-1 Mock Interviews with Mentors from Top Tech Companies.",
    des: "Get set for success with endless support! Mentorship sessions, Resume/Project reviews, Mock HR interviews, and Job Readiness sessions - all available to you.",
    img: practiceInterview,
    color: "#10B66A",
    icon: <LuScrollText />,
  },
  {
    tabName: "Placement Portal",
    heading:
      "Easily keep track of your job applications with our Placement Portal.",
    des: "Easily keep track of companies, positions, ongoing tests, technical and HR interviews, and secure your dream job in no time.",
    img: placement,
    color: "#FF7A75",
    icon: <PiSuitcase />,
  },
  {
    tabName: "Weekly Contest",
    heading:
      "Stay ahead of the competition by preparing for company tests through our curated weekly contests.",
    des: "We'll cover all the important topics through these contests so that you can crush the module test and interview and know how you rank among your classmates.",
    img: contest,
    color: "#A57AFD",
    icon: <PiTrophyBold />,
  },
  {
    tabName: "Soft Skills & Aptitude",
    heading:
      "We prepare students to excel in HR interviews, aptitude tests by honing their communication and logical abilities.",
    des: "We provide weekly soft skills sessions and classes on vital topics around Quantitative Ability, Logical Reasoning, making sure that our students are well-equipped for these rounds!",
    img: softSkill,
    color: "#FB86D5",
    icon: <RiSpeakLine />,
  },
];

export default platformData;
