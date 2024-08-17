"use client";
import React from "react";

const WorkDetails = ({ params }) => {
  const paramsID = parseInt(params.id, 10); // Convert the param to an integer for comparison

  const sworkDetails = [
    {
      sid: 1,
      sname: "E-Commerce",
      stype: "ui design, animation",
      simage: "/Work/home.jpg",
      slink: "https://www.behance.net/gallery/195661385/Landing-page-Preloader",
      sdesc:
        "Implement a sleek preloading animation that keeps users engaged while the content loads. Use a simple, branded animation that smoothly transitions into the main content, signaling the page's readiness without causing distractions.",
    },
    {
      sid: 2,
      sname: "Subarna Bhandari",
      stype: "Portfolio, Design",
      simage: "/Work/sbhd.png",
      slink: "https://www.subarnabhandari.com/studio",
      sdesc:
        "Subarna Bhandari's portfolio website features their design projects, showcasing their skills and creative approach. It serves as a professional platform to highlight their expertise and attract potential clients and employers. The site effectively demonstrates their talent and unique style.",
    },
    {
      sid: 3,
      sname: "Esabda",
      stype: "web Development, Design",
      simage: "/Work/esabda.png",
      slink: "https://esabda.com",
      sdesc:
        "The website provides valuable insights and information on Business related topics. It aims to educate readers, offer expert opinions, and keep them informed about industry trends and developments.",
    },
    {
      sid: 4,
      sname: "LIMS, DFTQC",
      stype: "Software, Development",
      simage: "/Work/lims.png",
      slink: "https://lims.dftqc.gov.np",
      sdesc:
        "LIMS improves efficiency by automating sample tracking and workflow management, enhancing data accuracy through centralized data management. It ensures compliance with regulations and provides remote access for better collaboration and scalability.",
    },
    {
      sid: 5,
      sname: "Google Traders",
      stype: "Logo, Design",
      simage: "/Work/google.jpg",
      slink: "https://www.behance.net/gallery/123301413/Gooogle-Traders-Logo",
      sdesc:
        "Created and implemented a logo that effectively communicates your brand's identity and enhances your website's appeal.",
    },
  ];

  const workDetail = sworkDetails.find((work) => work.sid === paramsID);

  return (
    <div>
      {workDetail ? (
        <div>
          <h1>{workDetail.sname}</h1>
          <img src={workDetail.simage} alt={workDetail.sname} />
          <p>{workDetail.stype}</p>
          <p>{workDetail.sdesc}</p>
          <a href={workDetail.slink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ) : (
        <p>Work not found</p>
      )}
    </div>
  );
};

export default WorkDetails;
