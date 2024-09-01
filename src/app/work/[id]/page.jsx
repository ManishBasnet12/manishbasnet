"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../../../../Components/Footer";
import { RiArrowRightFill } from "react-icons/ri";

const WorkDetails = ({ params }) => {
  const paramsID = params.id; // Convert the param to an integer for comparison

  const sworkDetails = [
    {
      id: "1",
      sname: "esabda",
      title: "Esabda",
      tagline:
        " Esabda delivers various forms of articles & information that provide some extra help to make daily life better.",
      service: "web Development",
      year: "2020",
      industry: "Tech",
      website: "https://esabda.com/",
      image: [
        { img1: "/Work/esabda1.png" },
        { img2: "/Work/esabda2.png" },
        { img3: "/Work/esabda3.png" },
        { img4: "/Work/esabda4.png" },
      ],
      objective: [
        {
          obj1: "Esabda aims to provide high-quality, research-based articles that are reliable and well-researched. The platform prioritizes accuracy and depth, ensuring that the information it shares is factual and valuable.",
        },
        {
          obj2: "Esabda is focused on understanding and addressing the real issues and questions that people face, particularly in the areas of Business, Insurance, Technology, and Finance. The content is designed to be practical and helpful, offering solutions and insights that can make a difference in daily life.",
        },
        {
          obj3: "While based in Kathmandu, Nepal, Esabda targets a global audience. The platform's content is crafted to be relevant and accessible to people from all around the world, with a special focus on business-related topics that have universal appeal.",
        },
      ],
      solution: [
        {
          solu1:
            "For the solution, I adopted an interactive content format, focusing on user engagement and knowledge retention. By incorporating dynamic tools such as quizzes, polls, and financial calculators, I aimed to create an immersive learning experience that is both enjoyable and informative.",
        },
        {
          solu2:
            "Through thoughtful design of user interaction and feedback mechanisms, I ensured that each interactive element was tailored to enhance understanding and encourage users to explore further. From the seamless integration of interactive infographics to the responsive and adaptive content delivery, the interactive format is optimized to provide users with a personalized and enriching experience.",
        },
        {
          solu3:
            "In conclusion, the implementation of interactive content formats not only achieved the desired objective but also significantly enhanced user engagement. By merging creativity with functionality, I delivered a digital experience that resonates with the audience, making learning more accessible and enjoyable while fostering deeper connections with the content.",
        },
      ],
    },
    {
      id: "2",
      sname: "subarna",
      title: "Subarna Bhandari",
      tagline:
        " Subarna Bhandari, a Web, Graphic, & UI/UX Designer dedicated to transforming your vision into a compelling digital experience.",
      service: "web Development",
      year: "2021",
      industry: "Tech",
      website: "https://www.subarnabhandari.com/",
      image: [
        { img1: "/Work/subarna1.png" },
        { img2: "/Work/subarna2.png" },
        { img3: "/Work/subarna3.png" },
        { img4: "/Work/subarna4.png" },
      ],
      objective: [
        {
          obj1: "As a developer and digital designer, I had the privilege of collaborating with Subarna Bhandari on an exciting project aimed at elevating his online presence through an elegant and user-centric website design and user interface (UI). My initial goal was clear: to craft a modern, intuitive platform that effectively showcases Subarna’s unique skills, portfolio, and services while providing an exceptional user experience.",
        },
        {
          obj2: "To achieve this, I embarked on a comprehensive discovery phase, deeply understanding Subarna's brand identity, target audience, and site objectives. The objectives were to highlight his expertise in Web, Graphic, and UI/UX Design, create a seamless and user-friendly interface, and encourage client engagement through strategic design and development choices.",
        },
        {
          obj3: "The solution involved a minimalist yet sophisticated design approach, integrating high-quality visuals and easy navigation. I implemented features such as streamlined portfolio displays and interactive elements, ensuring that each UI component was thoughtfully designed to improve usability and drive conversions. By merging creativity with functionality, I delivered a digital experience that not only reflected Subarna’s brand essence but also facilitated deeper connections with his audience, ultimately fostering growth and engagement.",
        },
      ],
      solution: [
        {
          solu1:
            "For the solution, I employed a minimalist yet elegant design approach, with a focus on high-quality visuals and intuitive navigation. I integrated easy-to-use features like clear service categories and a streamlined portfolio display to enhance the browsing experience.",
        },
        {
          solu2:
            "Through careful consideration of user flows and interaction patterns, I ensured that each UI element was purposefully designed to improve usability and encourage exploration. From simplified navigation menus to engaging interactive elements, the UI was optimized to seamlessly guide visitors through Subarna's services and work, ultimately driving inquiries and client conversions.",
        },
        {
          solu3:
            "In conclusion, the website design and user interface (UI) provided not only met but exceeded the initial objectives. By combining creativity with functionality, I delivered a digital experience that not only reflected Subarna's brand essence but also empowered him to connect with his audience on a deeper level, driving engagement and promoting growth in his professional portfolio.",
        },
      ],
    },
    {
      id: "3",
      sname: "lims",
      title: "LIMS, DFTQC",
      tagline:
        " LIMS: Enhancing Precision and Efficiency in Every Laboratory Workflow",
      service: "Software Development",
      year: "2023",
      industry: "Tech",
      website: "https://lims.dftqc.gov.np/",
      image: [
        { img1: "/Work/lims1.png" },
        { img2: "/Work/lims2.png" },
        { img3: "/Work/lims3.png" },
        { img4: "/Work/lims4.png" },
      ],
      objective: [
        {
          obj1: "As a digital solutions provider, I worked on enhancing laboratory operations through the development of a Laboratory Information Management System (LIMS). My goal was to create a user-friendly system that manages sample tracking, ensures data accuracy, and automates workflows while meeting industry standards.",
        },
        {
          obj2: "To achieve this, I conducted a thorough discovery phase to understand the laboratory's needs, workflow, and pain points. This approach helped shape a system that streamlined operations and improved data management.",
        },
        {
          obj3: "The objectives were to streamline sample management, improve data accuracy and accessibility, and support compliance and efficiency. The LIMS effectively tracked samples, centralized data, and automated processes, thereby enhancing productivity and regulatory adherence.",
        },
      ],
      solution: [
        {
          solu1:
            "For the LIMS development, I focused on creating a robust, scalable solution that would address the specific needs of the laboratory. I employed a modular architecture, allowing for flexibility and easy updates as the lab’s requirements evolved. The solution was built using a combination of reliable backend technologies and a user-friendly frontend interface.",
        },
        {
          solu2:
            "I integrated comprehensive sample management features, enabling precise tracking from sample receipt to disposal. This was achieved through a centralized database, which ensured that all data was accessible in real-time, reducing the risk of errors and improving overall accuracy. Automated workflows were also implemented to streamline laboratory processes, from data entry to report generation, significantly reducing manual tasks and enhancing efficiency.",
        },
        {
          solu3:
            "To ensure compliance with industry standards, I incorporated quality control modules and reporting tools that met regulatory requirements. The system was thoroughly tested to ensure that it could handle high volumes of data and perform under various conditions, providing the lab with a reliable and effective solution to manage their operations.",
        },
      ],
    },
    {
      id: "4",
      sname: "google",
      title: "Google traders",
      tagline:
        " Google Traders: Your Source for Cutting-Edge Electronic Devices.",
      service: "Logo Design",
      year: "2021",
      industry: "Tech",
      website: "https://www.behance.net/gallery/123301413/Gooogle-Traders-Logo",
      image: [
        { img1: "/Work/google1.jpg" },
        { img2: "/Work/google2.png" },
        { img3: "/Work/google3.png" },
        { img4: "/Work/google4.jpg" },
      ],
      objective: [
        {
          obj1: "The primary objective of creating the Google Traders logo is to establish a strong and unique brand identity. The logo should visually convey the core values and mission of Google Traders, making it instantly recognizable and setting the tone for the brand’s presence in the market.",
        },
        {
          obj2: "Another key objective is to boost brand recognition. A well-designed logo for Google Traders will differentiate the brand from competitors, making it easy for customers to identify and remember. Consistent use of the logo will help build familiarity and trust with the target audience.",
        },
        {
          obj3: "The Google Traders logo aims to communicate a sense of professionalism and reliability. It should reflect the quality and credibility of the brand, making a strong impression on potential customers and stakeholders.",
        },
      ],
      solution: [
        {
          solu1:
            "To meet these objectives, I adopted a design process that began with a deep dive into the brand’s values, mission, and target audience. Understanding what Google Traders stands for allowed me to create a logo that is both meaningful and visually compelling.",
        },
        {
          solu2:
            "The design process involved exploring various concepts that incorporated elements representing the trading industry, such as symbols of exchange, commerce, or growth. I focused on creating a simple yet impactful design that would work well across different mediums, from digital platforms to printed materials. The final logo was crafted to be versatile, ensuring it maintains its effectiveness whether scaled up for a billboard or down for a business card.",
        },
        {
          solu3:
            "The end result was a logo that not only established a strong and professional identity for Google Traders but also enhanced its visibility and recognition in the market, becoming a key component of the brand’s overall strategy.",
        },
      ],
    },
  ];

  const workDetail = sworkDetails.find((work) => work.sname === paramsID);

  const workId = parseInt(workDetail?.id, 10);
  let nextWorkId = workId + 1;

  if (workId === sworkDetails.length) {
    nextWorkId = 1;
  }

  let nextWork = sworkDetails[nextWorkId - 1].sname;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical", 
      gestureDirection: "vertical", 
      smooth: true,
      mouseMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    gsap.set(".workDetails h1", { y: "-100%", opacity: 0 });
    gsap.set(".tagline", { opacity: 0 });

    const t1 = gsap.timeline({
      delay: 0.2,
      ease: "power4.out",
    });

    t1.to(".workDetails h1, .tagline", {
      y: 5,
      opacity: 1,
      duration: 0.6,
      stagger: 0,
    });
  }, []);

  return (
    <div className="workDy">
      <div className="workDetails">
        {workDetail ? (
          <div>
            <div className="wHead">
              <h1>{workDetail.title}</h1>
            </div>
            <p className="tagline">{workDetail.tagline}</p>
            <div className="workDetailsContent">
              <p className="left">
                <span>Service :</span> <span>{workDetail.service}</span>
              </p>
              <p className="right">
                <span>Year :</span> <span>{workDetail.year}</span>{" "}
              </p>
            </div>
            <div className="workDetailsContent">
              <p className="left">
                <span>Industry :</span> <span>{workDetail.industry}</span>
              </p>
              <p className="right">
                <span>Website :</span>{" "}
                <span>
                  <Link href={workDetail.website} target="_blank">
                    {" "}
                    {workDetail.title}
                  </Link>
                </span>{" "}
              </p>
            </div>
            <div>
              <Image
                className="image1"
                src={workDetail.image[0].img1}
                width={100}
                height={100}
                alt={workDetail.image[0].img1}
                unoptimized
              />
            </div>
            <div className="workContent">
              <h3>Objective</h3>
              {workDetail.objective.map((objective) => (
                <>
                  <p>{objective.obj1}</p>
                  <p>{objective.obj2}</p>
                  <p>{objective.obj3}</p>
                </>
              ))}
            </div>
            <div>
              <Image
                className="image1"
                src={workDetail.image[1].img2}
                width={100}
                height={100}
                alt={workDetail.image[2].img2}
                unoptimized
              />
            </div>
            <div className="workContent">
              <h3>solution</h3>
              {workDetail.solution.map((solution) => (
                <>
                  <p>{solution.solu1}</p>
                  <p>{solution.solu2}</p>
                  <p>{solution.solu3}</p>
                </>
              ))}
            </div>
            <div className="secImage">
              <div>
                <Image
                  className="image2"
                  src={workDetail.image[2].img3}
                  width={100}
                  height={100}
                  alt={workDetail.image[3].img3}
                  unoptimized
                />
              </div>
              <div>
                <Image
                  className="image2"
                  src={workDetail.image[3].img4}
                  width={100}
                  height={100}
                  alt={workDetail.image[3].img4}
                  unoptimized
                />
              </div>
            </div>
            <div className="nextWork">
              <p>next work</p>
            </div>
            <div className="nextBtn">
              <Link href={nextWork}>
                <span className="nextArrow">
                  <RiArrowRightFill />
                </span>
                <div className="textRevel">
                  <div className="textHidden">
                    <p>{sworkDetails[nextWorkId - 1].title}</p>
                    <p>{sworkDetails[nextWorkId - 1].title}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <p>Work not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WorkDetails;
