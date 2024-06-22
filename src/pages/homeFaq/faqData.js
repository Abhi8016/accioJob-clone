const faqData = [
  {
    id: "1",
    que: "Am I eligible for this course if I am from a non-technical background ?",
    ans: "Yes! All college students, graduates, and working professionals who are willing to put in the effort to break into the field of coding or data analytics, regardless of their degree, graduation percentage, or branch, are eligible for our courses.",
    // toggled: true,
  },
  {
    id: "2",
    que: "I am a college student but not in my final year. Can I still join the course ?",
    ans: "Yes, you can join our courses even if you are not in your final year of college. Our courses are designed for working professionals as well as students. You get lifetime access to course content, so you can learn at your own pace along with college academics. Nearing completion, you can use our placement services to find opportunities and secure a job. Many students join us in the second or third year to get an early start.",
  },
  {
    id: "3",
    que: "Are there any Scholarships ?",
    ans: "Yes. We have Scholarships up to 15% in store for motivated students who participate in Free AccioJob bootcamps to learn essential skills, solve assignments, and engage with our career counselors.",
  },
  {
    id: "4",
    que: "What scholarships are available on tuition fees ?",
    ans: "Motivated students can win substantial scholarships on tuition fees by showing zeal to learn by attending bootcamps, solving assignments, creating streaks, and engaging with our counselors.",
  },
  {
    id: "5",
    que: "Will I receive a Certificate once I complete my Course ?",
    ans: "Yes, our students will receive a certificate recognized Nationally & authenticated by National Skill Development Corporation (NSDC), India.",
  },
  {
    id: "6",
    que: "Is there any recommendation test for enrolling in AccioJob's courses ?",
    ans: "Yes, students take a 20-minute basic aptitude eligibility test. It helps us recommend the right course for them.",
  },
  {
    id: "7",
    que: "What is pay after placement mode of enrollment ?",
    ans: "In pay after placement mode, the tuition fees for the course are covered by AccioJob. The student pays the remaining fees after getting a job through AccioJob's placement services.",
  },
  {
    id: "8",
    que: "What is the selection process for pay after placement seats ?",
    ans: "One needs to clear the coding test and interview to get nominated for pay after placement. Top performers of every month will get selected for limited pay after placement seats.",
  },
  {
    id: "9",
    que: "When do students sign the ISA (Income Sharing Agreement) in the Pay after Placement Program ?",
    ans: "For the pay-after-placement model, selected students sign the Income Sharing Agreement (ISA) with AccioJob during onboarding before starting the course. The ISA outlines the terms of tuition fees coverage by AccioJob and payment obligations after placement support. Students not opting for ISA can enroll by paying the tuition fees upfront and signing the placement services agreement later. The ISA ensures financial accessibility for deserving students.",
  },
  {
    id: "10",
    que: "Is this course free or paid ?",
    ans: "Our courses require tuition fees payment to access learning content and services. We offer flexible payment options like EMIs, scholarships, and deferred ISAs in Full Stack Development courses for deserving students. There are free demo lectures, bootcamps, and learning material available to explore before enrolling.",
  },
  {
    id: "11",
    que: "I want to enroll by paying upfront, how much fee do I need to pay ?",
    ans: "The total tuition fee for our course is Rs. 80,000. This covers access to the entire course content and learning platform for the duration. Please get in touch with our team to know more about payment options. You can take placement services and pay the remaining fees after placement.",
  },
  {
    id: "12",
    que: "Do I have to pay under pay after placement model ?",
    ans: "In pay after placement mode for Full Stack Development courses, the tuition fees for the course are covered by AccioJob. The student pays the fees after getting a job through AccioJob's placement services.",
  },
  {
    id: "13",
    que: "Will I get an internship in the courses ?",
    ans: "Yes, you will get an internship in the Full Stack Development Courses. If you are a working professional, you can go for Capstone projects to build your portfolio for better placement opportunities.",
  },
  {
    id: "14",
    que: "What could be the ideal course for a College Student to start with zero knowledge of Tech/coding ?",
    ans: "The ideal course for a College Student with zero knowledge of Tech/coding could be our 'Intro to Programming' course or 'Data Analytics Fundamentals' course. These courses are designed to provide a solid foundation in coding and data analytics for beginners.",
  },
  {
    id: "15",
    que: "What could be the ideal course for a Working Professional ?",
    ans: "For a Working Professional, the ideal course could be our 'Full Stack Development' course or 'Data Science Bootcamp.' These courses offer comprehensive training and practical skills required for tech roles in the industry.",
  },
  {
    id: "16",
    que: "Which one is the ideal course for me ?",
    ans: "The ideal course for you depends on your background, interest areas, and career goals. We suggest you appear for a recommendation test on the platform that will help you understand the best suitable course for you.",
  },
  {
    id: "17",
    que: "How long will it take to complete the course ?",
    ans: "The duration of our courses is typically 6-8 months depending on the curriculum. This enables comprehensive learning from fundamentals to advanced topics with thorough practice. The courses are designed for both working professionals and students to complete at their own pace.",
  },
  {
    id: "18",
    que: "What If I miss a live session ?",
    ans: "Recordings of all the Live Lectures would be available on your portal as soon as the live lecture ends, which you can watch in case you have missed the live lectures.",
  },
  {
    id: "19",
    que: "How will my doubts be addressed in online courses ?",
    ans: "We provide a Live Doubt Solving feature where a pool of mentors is readily available to address students' questions and concerns which is available during the whole day so that you do not face any roadblocks in your learning journey. Whether through chat or video, our mentors are dedicated to resolving any doubts students may encounter.",
  },
  {
    id: "20",
    que: "I am a working professional. What if I don't get the time to watch the live lecture ?",
    ans: "Although we recommend students watch the course live, still if you are not able to attend a class, you will get the recording available in your portal.",
  },
  {
    id: "21",
    que: "I don't want to code but I want a tech job. What can I do ?",
    ans: "The Data Analytics track will be more suited for your interests as it requires minimal coding skills for the entry-level roles in the industry.",
  },
  {
    id: "22",
    que: "How will the Mock interviews help me for my placement ?",
    ans: "Our mock interviews will provide you with a realistic interview experience and help you prepare for the actual company placement interviews, helping you to evaluate yourself, get feedback on improvement areas from experts, and giving you a competitive edge in placements.",
  },
  {
    id: "23",
    que: "How do you ensure placements for students who come from a non-technical background ?",
    ans: "Our curriculum focuses on extensive hands-on implementation starting from fundamentals to build job-ready skills even for beginners. Long duration courses allow time to practice and gain conceptual clarity. Personal mentors guide each student in their learning journey. With over 450+ hiring partners, we're able to provide tailored job opportunities suiting different candidate profiles.",
  },
  {
    id: "24",
    que: "Which companies will I be referred to on completing AccioJob's course ?",
    ans: "Students can access all eligible drives by 450+ hiring partners of AccioJob. You will be able to access a mix of startups and MNCs like Lowe's, HSBC, Paytm, Park+, etc.",
  },
  {
    id: "25",
    que: "When can I sign up for placement services after completing the course ?",
    ans: "You can opt for placement services any time up to 3 years after completing the course if you have cleared the eligibility criteria.",
  },
  {
    id: "26",
    que: "Will I have access to placement opportunities even if I don't opt for placement services ?",
    ans: "No, personalized placement preparation services and access to AccioJob drives are only for students who sign up for placement services.",
  },
  {
    id: "27",
    que: "What resources do students get during Placement Services ?",
    ans: "The placement services provide resources like mock interviews, resume building sessions, mentorships, interview preparation modules, soft skills training, doubt clearing, coding contests, company-specific materials, HR sessions, a dedicated placement coach, etc. These resources, along with access to hiring drives, help students prepare thoroughly and get placed in tech roles.",
  },
  {
    id: "28",
    que: "Can I pay the tuition fee in installments ?",
    ans: "Yes, you can pay the tuition fee component in installments of up to 12 months at 0% interest with our education loan partners.",
  },
];
export default faqData;
